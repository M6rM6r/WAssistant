from fastapi import FastAPI
from pydantic import BaseModel
import qrcode
import io
from fastapi.responses import StreamingResponse

app = FastAPI(title="wassistant-backend")


class QRRequest(BaseModel):
    data: str


@app.post("/qr")
def generate_qr(req: QRRequest):
    """Generate a PNG QR code for the provided data and return as stream."""
    qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_H)
    qr.add_data(req.data)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return StreamingResponse(buf, media_type="image/png")
