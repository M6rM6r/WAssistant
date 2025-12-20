# flake8: noqa
import time
import uuid
from collections.abc import Callable

from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware

class SystemObservabilityMiddleware(BaseHTTPMiddleware):
    """
    OCPD: Strict Request Tracking and Performance Monitoring.
    Ensures every transaction is traceable and measured.
    """
    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        # Generate Unique Trace ID
        request_id = str(uuid.uuid4())
        request.state.request_id = request_id

        start_time = time.time()

        # Execute Pipeline
        response = await call_next(request)

        # Calculate Latency
        process_time = time.time() - start_time

        # Inject Trace Headers
        response.headers["X-Process-Time"] = str(process_time)
        response.headers["X-Request-ID"] = request_id

        return response
