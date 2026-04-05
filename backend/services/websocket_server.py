"""
INTJ: WebSocket Server for Real-Time Collaboration
OCPD: Deterministic event distribution with measurable latency
"""
import asyncio
import json
from datetime import datetime
from typing import Dict, Set, Optional, List, Any
from enum import Enum
import websockets
from websockets.server import WebSocketServerProtocol

class EventType(Enum):
    """WebSocket event types"""
    USER_JOINED = "user_joined"
    USER_LEFT = "user_left"
    CURSOR_UPDATE = "cursor_update"
    TEMPLATE_EDIT = "template_edit"
    PRESENCE_UPDATE = "presence_update"
    ACTIVITY_FEED = "activity_feed"
    SYNC_REQUEST = "sync_request"
    SYNC_RESPONSE = "sync_response"
    CONFLICT_DETECTED = "conflict_detected"

class CollaborationServer:
    """INTJ: Enterprise-grade WebSocket collaboration server"""
    
    def __init__(self, host: str = "0.0.0.0", port: int = 8765):
        self.host = host
        self.port = port
        self.clients: Dict[str, WebSocketServerProtocol] = {}
        self.rooms: Dict[str, Set[str]] = {}  # room_id -> set of client_ids
        self.user_presence: Dict[str, dict] = {}  # client_id -> presence data
        self.message_history: Dict[str, List[dict]] = {}  # room_id -> messages
        self.server = None
        
    async def start(self):
        """Start the WebSocket server"""
        self.server = await websockets.serve(
            self._handle_client,
            self.host,
            self.port,
            ping_interval=30,
            ping_timeout=10
        )
        print(f"WebSocket server started at ws://{self.host}:{self.port}")
        await self.server.wait_closed()
    
    async def stop(self):
        """Graceful shutdown"""
        if self.server:
            self.server.close()
            await self.server.wait_closed()
    
    async def _handle_client(self, websocket: WebSocketServerProtocol, path: str):
        """Handle client connection lifecycle"""
        client_id = self._generate_client_id()
        self.clients[client_id] = websocket
        
        try:
            # Send welcome message
            await self._send_to_client(client_id, {
                "type": "connected",
                "client_id": client_id,
                "timestamp": datetime.utcnow().isoformat()
            })
            
            # Handle messages
            async for message in websocket:
                try:
                    data = json.loads(message)
                    await self._process_message(client_id, data)
                except json.JSONDecodeError:
                    await self._send_error(client_id, "Invalid JSON")
                except Exception as e:
                    print(f"Error processing message: {e}")
                    await self._send_error(client_id, str(e))
                    
        except websockets.exceptions.ConnectionClosed:
            pass
        finally:
            await self._handle_disconnect(client_id)
    
    async def _process_message(self, client_id: str, data: dict):
        """Process incoming WebSocket message"""
        msg_type = data.get("type")
        
        handlers = {
            "join_room": self._handle_join_room,
            "leave_room": self._handle_leave_room,
            "cursor_update": self._handle_cursor_update,
            "template_edit": self._handle_template_edit,
            "sync_request": self._handle_sync_request,
            "presence_update": self._handle_presence_update,
            "activity": self._handle_activity,
        }
        
        handler = handlers.get(msg_type)
        if handler:
            await handler(client_id, data)
        else:
            await self._send_error(client_id, f"Unknown message type: {msg_type}")
    
    async def _handle_join_room(self, client_id: str, data: dict):
        """Handle client joining a collaboration room"""
        room_id = data.get("room_id")
        user_info = data.get("user_info", {})
        
        if not room_id:
            await self._send_error(client_id, "room_id required")
            return
        
        # Add to room
        if room_id not in self.rooms:
            self.rooms[room_id] = set()
        self.rooms[room_id].add(client_id)
        
        # Update presence
        self.user_presence[client_id] = {
            "room_id": room_id,
            "user_info": user_info,
            "joined_at": datetime.utcnow().isoformat(),
            "cursor": None,
            "is_active": True
        }
        
        # Notify others in room
        await self._broadcast_to_room(
            room_id,
            {
                "type": EventType.USER_JOINED.value,
                "client_id": client_id,
                "user_info": user_info,
                "timestamp": datetime.utcnow().isoformat()
            },
            exclude=client_id
        )
        
        # Send current room state
        room_state = self._get_room_state(room_id)
        await self._send_to_client(client_id, {
            "type": "room_state",
            "room_id": room_id,
            "state": room_state
        })
        
        print(f"Client {client_id} joined room {room_id}")
    
    async def _handle_leave_room(self, client_id: str, data: dict):
        """Handle client leaving a room"""
        room_id = data.get("room_id")
        if room_id and client_id in self.rooms.get(room_id, set()):
            self.rooms[room_id].discard(client_id)
            
            await self._broadcast_to_room(
                room_id,
                {
                    "type": EventType.USER_LEFT.value,
                    "client_id": client_id,
                    "timestamp": datetime.utcnow().isoformat()
                }
            )
    
    async def _handle_cursor_update(self, client_id: str, data: dict):
        """Handle real-time cursor position updates"""
        room_id = self._get_client_room(client_id)
        if not room_id:
            return
        
        cursor_data = data.get("cursor", {})
        
        # Update presence
        if client_id in self.user_presence:
            self.user_presence[client_id]["cursor"] = cursor_data
        
        # Broadcast to room
        await self._broadcast_to_room(
            room_id,
            {
                "type": EventType.CURSOR_UPDATE.value,
                "client_id": client_id,
                "cursor": cursor_data,
                "timestamp": datetime.utcnow().isoformat()
            },
            exclude=client_id
        )
    
    async def _handle_template_edit(self, client_id: str, data: dict):
        """Handle collaborative template editing"""
        room_id = self._get_client_room(client_id)
        if not room_id:
            return
        
        edit_data = data.get("edit", {})
        
        # Check for conflicts
        conflict = self._detect_conflict(room_id, edit_data)
        
        if conflict:
            await self._send_to_client(client_id, {
                "type": EventType.CONFLICT_DETECTED.value,
                "conflict": conflict,
                "timestamp": datetime.utcnow().isoformat()
            })
            return
        
        # Store edit in history
        if room_id not in self.message_history:
            self.message_history[room_id] = []
        
        self.message_history[room_id].append({
            "client_id": client_id,
            "edit": edit_data,
            "timestamp": datetime.utcnow().isoformat()
        })
        
        # Broadcast to room
        await self._broadcast_to_room(
            room_id,
            {
                "type": EventType.TEMPLATE_EDIT.value,
                "client_id": client_id,
                "edit": edit_data,
                "timestamp": datetime.utcnow().isoformat()
            }
        )
    
    async def _handle_sync_request(self, client_id: str, data: dict):
        """Handle data synchronization request"""
        room_id = self._get_client_room(client_id)
        if not room_id:
            return
        
        last_sync = data.get("last_sync")
        
        # Get changes since last sync
        changes = self._get_changes_since(room_id, last_sync)
        
        await self._send_to_client(client_id, {
            "type": EventType.SYNC_RESPONSE.value,
            "changes": changes,
            "timestamp": datetime.utcnow().isoformat()
        })
    
    async def _handle_presence_update(self, client_id: str, data: dict):
        """Handle user presence status update"""
        room_id = self._get_client_room(client_id)
        if not room_id:
            return
        
        status = data.get("status", "active")
        
        if client_id in self.user_presence:
            self.user_presence[client_id]["is_active"] = status == "active"
        
        await self._broadcast_to_room(
            room_id,
            {
                "type": EventType.PRESENCE_UPDATE.value,
                "client_id": client_id,
                "status": status,
                "timestamp": datetime.utcnow().isoformat()
            }
        )
    
    async def _handle_activity(self, client_id: str, data: dict):
        """Handle activity feed updates"""
        room_id = self._get_client_room(client_id)
        if not room_id:
            return
        
        activity = data.get("activity", {})
        
        await self._broadcast_to_room(
            room_id,
            {
                "type": EventType.ACTIVITY_FEED.value,
                "client_id": client_id,
                "activity": activity,
                "timestamp": datetime.utcnow().isoformat()
            }
        )
    
    async def _handle_disconnect(self, client_id: str):
        """Clean up on client disconnect"""
        # Find and leave all rooms
        for room_id, clients in self.rooms.items():
            if client_id in clients:
                clients.discard(client_id)
                await self._broadcast_to_room(
                    room_id,
                    {
                        "type": EventType.USER_LEFT.value,
                        "client_id": client_id,
                        "timestamp": datetime.utcnow().isoformat()
                    }
                )
        
        # Clean up
        self.clients.pop(client_id, None)
        self.user_presence.pop(client_id, None)
        
        print(f"Client {client_id} disconnected")
    
    async def _send_to_client(self, client_id: str, message: dict):
        """Send message to specific client"""
        if client_id in self.clients:
            try:
                await self.clients[client_id].send(json.dumps(message))
            except websockets.exceptions.ConnectionClosed:
                pass
    
    async def _send_error(self, client_id: str, error: str):
        """Send error message to client"""
        await self._send_to_client(client_id, {
            "type": "error",
            "error": error,
            "timestamp": datetime.utcnow().isoformat()
        })
    
    async def _broadcast_to_room(
        self, 
        room_id: str, 
        message: dict, 
        exclude: Optional[str] = None
    ):
        """Broadcast message to all clients in room"""
        if room_id not in self.rooms:
            return
        
        tasks = []
        for client_id in self.rooms[room_id]:
            if client_id != exclude and client_id in self.clients:
                tasks.append(self._send_to_client(client_id, message))
        
        if tasks:
            await asyncio.gather(*tasks, return_exceptions=True)
    
    def _get_client_room(self, client_id: str) -> Optional[str]:
        """Get room ID for client"""
        if client_id in self.user_presence:
            return self.user_presence[client_id].get("room_id")
        return None
    
    def _get_room_state(self, room_id: str) -> dict:
        """Get current state of room"""
        if room_id not in self.rooms:
            return {"users": [], "history": []}
        
        users = [
            {
                "client_id": cid,
                **self.user_presence.get(cid, {})
            }
            for cid in self.rooms[room_id]
            if cid in self.user_presence
        ]
        
        history = self.message_history.get(room_id, [])
        
        return {
            "users": users,
            "history": history[-50:]  # Last 50 messages
        }
    
    def _detect_conflict(self, room_id: str, edit_data: dict) -> Optional[dict]:
        """Detect edit conflicts (simplified)"""
        # Simplified conflict detection
        # In production, use operational transformation (OT) or CRDTs
        return None
    
    def _get_changes_since(self, room_id: str, last_sync: Optional[str]) -> List[dict]:
        """Get changes since last sync timestamp"""
        if not last_sync or room_id not in self.message_history:
            return self.message_history.get(room_id, [])
        
        # Filter changes after last_sync
        changes = []
        for msg in self.message_history[room_id]:
            if msg.get("timestamp", "") > last_sync:
                changes.append(msg)
        
        return changes
    
    def _generate_client_id(self) -> str:
        """Generate unique client ID"""
        import uuid
        return str(uuid.uuid4())[:8]
    
    def get_stats(self) -> dict:
        """Get server statistics"""
        return {
            "total_clients": len(self.clients),
            "total_rooms": len(self.rooms),
            "clients_per_room": {
                room_id: len(clients) 
                for room_id, clients in self.rooms.items()
            }
        }

# Global collaboration server instance
collab_server = CollaborationServer()

# Run server
if __name__ == "__main__":
    asyncio.run(collab_server.start())
