"""
INTJ: Bulk Operations Processing Engine
OCPD: Efficient batch processing with queue management and observability
"""
import asyncio
import json
from datetime import datetime
from enum import Enum
from typing import List, Dict, Optional, Callable, Any
from dataclasses import dataclass, asdict
import uuid

import redis
from sqlalchemy.orm import Session

from backend.database import get_db
from backend.models import BulkOperation, BulkOperationItem
from backend.cache_manager import cache

class BulkOpStatus(str, Enum):
    """OCPD: Deterministic state machine"""
    PENDING = "pending"
    PROCESSING = "processing"
    COMPLETED = "completed"
    PARTIAL = "partial"
    FAILED = "failed"
    CANCELLED = "cancelled"

class BulkOpType(str, Enum):
    """INTJ: Supported bulk operation types"""
    QR_GENERATE = "qr.generate"
    LINK_CREATE = "link.create"
    VCARD_CREATE = "vcard.create"
    TEMPLATE_APPLY = "template.apply"
    HISTORY_EXPORT = "history.export"
    CONTACT_IMPORT = "contact.import"

@dataclass
class BulkOperationResult:
    """OCPD: Structured result with full observability"""
    success: bool
    processed: int
    failed: int
    total: int
    errors: List[Dict[str, Any]]
    processing_time_ms: float
    output_data: Optional[List[Dict]] = None

class BulkOperationManager:
    """INTJ: Enterprise-grade batch processing orchestrator"""
    
    def __init__(self):
        self._queue = asyncio.Queue()
        self._workers: List[asyncio.Task] = []
        self._processing = False
        self._handlers: Dict[BulkOpType, Callable] = {}
        self._metrics = {
            "operations_completed": 0,
            "items_processed": 0,
            "total_processing_time": 0.0
        }
    
    def register_handler(self, op_type: BulkOpType, handler: Callable):
        """Register operation type handler"""
        self._handlers[op_type] = handler
    
    async def create_operation(
        self,
        db: Session,
        user_id: int,
        op_type: BulkOpType,
        items: List[Dict],
        metadata: Optional[Dict] = None
    ) -> BulkOperation:
        """Initialize bulk operation with queue management"""
        operation = BulkOperation(
            id=str(uuid.uuid4()),
            user_id=user_id,
            operation_type=op_type.value,
            status=BulkOpStatus.PENDING,
            total_items=len(items),
            processed_items=0,
            failed_items=0,
            metadata=json.dumps(metadata or {}),
            created_at=datetime.utcnow()
        )
        
        db.add(operation)
        db.commit()
        
        # Queue items for processing
        for idx, item in enumerate(items):
            op_item = BulkOperationItem(
                operation_id=operation.id,
                item_index=idx,
                input_data=json.dumps(item),
                status="pending"
            )
            db.add(op_item)
        
        db.commit()
        
        # Add to processing queue
        await self._queue.put(operation.id)
        
        # Ensure workers are running
        if not self._processing:
            self._start_workers()
        
        return operation
    
    async def process_operation(
        self,
        db: Session,
        operation_id: str
    ) -> BulkOperationResult:
        """INTJ: Strategic batch processing with error isolation"""
        start_time = datetime.utcnow()
        
        operation = db.query(BulkOperation).filter(
            BulkOperation.id == operation_id
        ).first()
        
        if not operation:
            return BulkOperationResult(
                success=False,
                processed=0,
                failed=0,
                total=0,
                errors=[{"error": "Operation not found"}],
                processing_time_ms=0.0
            )
        
        # Update status
        operation.status = BulkOpStatus.PROCESSING
        db.commit()
        
        # Get handler
        handler = self._handlers.get(BulkOpType(operation.operation_type))
        if not handler:
            operation.status = BulkOpStatus.FAILED
            db.commit()
            return BulkOperationResult(
                success=False,
                processed=0,
                failed=operation.total_items,
                total=operation.total_items,
                errors=[{"error": f"No handler for {operation.operation_type}"}],
                processing_time_ms=0.0
            )
        
        # Process items with error isolation
        items = db.query(BulkOperationItem).filter(
            BulkOperationItem.operation_id == operation_id,
            BulkOperationItem.status == "pending"
        ).all()
        
        processed = 0
        failed = 0
        errors = []
        output_data = []
        
        # Process in chunks for memory efficiency
        chunk_size = 100
        for i in range(0, len(items), chunk_size):
            chunk = items[i:i + chunk_size]
            
            # Process chunk concurrently
            tasks = [
                self._process_single_item(handler, item, db)
                for item in chunk
            ]
            results = await asyncio.gather(*tasks, return_exceptions=True)
            
            for item, result in zip(chunk, results):
                if isinstance(result, Exception):
                    failed += 1
                    item.status = "failed"
                    item.error_message = str(result)
                    errors.append({
                        "index": item.item_index,
                        "input": json.loads(item.input_data),
                        "error": str(result)
                    })
                else:
                    processed += 1
                    item.status = "completed"
                    item.output_data = json.dumps(result) if result else None
                    if result:
                        output_data.append(result)
                
                db.commit()
            
            # Update progress
            operation.processed_items = processed
            operation.failed_items = failed
            db.commit()
        
        # Calculate final status
        processing_time = (datetime.utcnow() - start_time).total_seconds() * 1000
        
        if failed == 0:
            operation.status = BulkOpStatus.COMPLETED
        elif processed > 0:
            operation.status = BulkOpStatus.PARTIAL
        else:
            operation.status = BulkOpStatus.FAILED
        
        operation.completed_at = datetime.utcnow()
        db.commit()
        
        # Update metrics
        self._metrics["operations_completed"] += 1
        self._metrics["items_processed"] += processed + failed
        self._metrics["total_processing_time"] += processing_time / 1000
        
        return BulkOperationResult(
            success=failed == 0,
            processed=processed,
            failed=failed,
            total=operation.total_items,
            errors=errors,
            processing_time_ms=processing_time,
            output_data=output_data if output_data else None
        )
    
    async def _process_single_item(
        self,
        handler: Callable,
        item: BulkOperationItem,
        db: Session
    ) -> Any:
        """Process single item with timeout and error handling"""
        input_data = json.loads(item.input_data)
        
        try:
            # Apply timeout to prevent hanging
            result = await asyncio.wait_for(
                handler(input_data),
                timeout=30.0
            )
            return result
        except asyncio.TimeoutError:
            raise Exception("Processing timeout exceeded")
        except Exception as e:
            raise Exception(f"Processing error: {str(e)}")
    
    def _start_workers(self, worker_count: int = 3):
        """Start background processing workers"""
        self._processing = True
        for i in range(worker_count):
            task = asyncio.create_task(self._worker_loop(f"worker-{i}"))
            self._workers.append(task)
    
    async def _worker_loop(self, worker_id: str):
        """INTJ: Continuous processing worker"""
        while self._processing:
            try:
                # Get operation from queue with timeout
                operation_id = await asyncio.wait_for(
                    self._queue.get(),
                    timeout=1.0
                )
                
                # Get fresh DB session
                db = next(get_db())
                try:
                    await self.process_operation(db, operation_id)
                finally:
                    db.close()
                
                self._queue.task_done()
                
            except asyncio.TimeoutError:
                continue
            except Exception as e:
                print(f"Worker {worker_id} error: {e}")
    
    async def get_operation_status(
        self,
        db: Session,
        operation_id: str
    ) -> Dict:
        """OCPD: Real-time operation status with metrics"""
        operation = db.query(BulkOperation).filter(
            BulkOperation.id == operation_id
        ).first()
        
        if not operation:
            return {"error": "Operation not found"}
        
        progress = (
            (operation.processed_items + operation.failed_items) / operation.total_items * 100
        ) if operation.total_items > 0 else 0
        
        return {
            "id": operation.id,
            "type": operation.operation_type,
            "status": operation.status,
            "progress_percent": round(progress, 2),
            "total_items": operation.total_items,
            "processed_items": operation.processed_items,
            "failed_items": operation.failed_items,
            "created_at": operation.created_at.isoformat(),
            "completed_at": operation.completed_at.isoformat() if operation.completed_at else None,
            "metadata": json.loads(operation.metadata) if operation.metadata else {}
        }
    
    def get_metrics(self) -> Dict:
        """INTJ: Quantifiable performance metrics"""
        ops_completed = self._metrics["operations_completed"]
        avg_time = (
            self._metrics["total_processing_time"] / ops_completed
            if ops_completed > 0 else 0
        )
        
        return {
            "operations_completed": ops_completed,
            "items_processed": self._metrics["items_processed"],
            "avg_processing_time_sec": round(avg_time, 4),
            "queue_size": self._queue.qsize(),
            "active_workers": len(self._workers),
            "throughput_per_minute": round(
                self._metrics["items_processed"] / 
                (self._metrics["total_processing_time"] / 60),
                2
            ) if self._metrics["total_processing_time"] > 0 else 0
        }
    
    async def cancel_operation(
        self,
        db: Session,
        operation_id: str
    ) -> bool:
        """Cancel pending operation"""
        operation = db.query(BulkOperation).filter(
            BulkOperation.id == operation_id,
            BulkOperation.status.in_([BulkOpStatus.PENDING, BulkOpStatus.PROCESSING])
        ).first()
        
        if not operation:
            return False
        
        operation.status = BulkOpStatus.CANCELLED
        operation.completed_at = datetime.utcnow()
        db.commit()
        
        return True
    
    def stop(self):
        """Graceful shutdown"""
        self._processing = False
        for worker in self._workers:
            worker.cancel()

# Global bulk operation manager
bulk_manager = BulkOperationManager()
