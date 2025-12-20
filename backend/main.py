# flake8: noqa
# mypy: ignore-errors
import io
from typing import List, TYPE_CHECKING

import qrcode
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.responses import StreamingResponse
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from sqlalchemy.orm import Session

from . import auth, database, models
from .middleware import SystemObservabilityMiddleware

if TYPE_CHECKING:
    from sqlalchemy.orm import Session

# OCPD: Precision API Initialization
app = FastAPI(
    title="WAssistant Platinum API",
    version="1.4.1",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Strategic Middleware Integration
app.add_middleware(SystemObservabilityMiddleware)

# Database Table Creation
models.Base.metadata.create_all(bind=database.engine)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# --- Optimized Schemas ---
class UserCreate(BaseModel):
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TemplateSchema(BaseModel):
    title: str
    content: str

class HistorySchema(BaseModel):
    type: str
    data: str
    display: str

# --- Dependency Injection ---
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
) -> models.User:
    """OCPD: Deterministic user resolution with JWT validation."""
    email = auth.verify_token(token)
    if email is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials"
        )
    user = db.query(models.User).filter(models.User.email == email).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# --- Endpoints ---

@app.post("/signup", response_model=Token)
def signup(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Identity already exists")

    hashed_pw = auth.get_password_hash(user.password)
    new_user = models.User(email=user.email, hashed_password=hashed_pw)
    db.add(new_user)
    db.commit()

    access_token = auth.create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

@app.post("/token", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == form_data.username).first()
    if not user or not auth.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Incorrect credentials")

    access_token = auth.create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/sync/history", response_model=List[HistorySchema])
def sync_history(current_user: models.User = Depends(get_current_user)):
    """INTJ Strategy: Retrieve unified history for authenticated users."""
    return current_user.history

@app.post("/sync/history")
def add_to_history(
    item: HistorySchema,
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    new_item = models.HistoryItem(**item.dict(), user_id=current_user.id)
    db.add(new_item)
    db.commit()
    return {"status": "synchronized"}

@app.get("/qr")
def generate_qr(data: str):
    """Execution: High-precision QR generation with H-level error correction."""
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H)
    qr.add_data(data)
    img = qr.make_image(fill_color="black", back_color="white")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return StreamingResponse(buf, media_type="image/png")
