import os
from backend.auth_service import verify_password, get_password_hash, create_access_token

# OCPD: Strict security constants
SECRET_KEY = os.getenv("JWT_SECRET", "itlab_ocpd_security_gate")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 1440  # 24 hours
