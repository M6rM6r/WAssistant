import qrcode
import os


def generate_preview_qr(data, filename="preview_qr.png"):
    """
    Generates a standard QR code for preview/marketing purposes.
    Requires: pip install qrcode[pil]
    """
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")

    # Ensure directory exists
    output_dir = "assets/marketing"
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    path = os.path.join(output_dir, filename)
    img.save(path)
    print(f"QR Code saved to {path}")


if __name__ == "__main__":
    print("Generating marketing QR code...")
    # Example: Link to the app or a demo whatsapp link
    generate_preview_qr(
        "https://wa.me/1234567890?text=Hello%20from%20Wassistant",
        "demo_qr.png",
    )
