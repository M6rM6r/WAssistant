import urllib.parse


def generate_whatsapp_link(phone_number, message=""):
    """
    Generates a WhatsApp direct link.
    """
    base_url = "https://wa.me/"

    # Clean the phone number (remove +, spaces, dashes)
    clean_number = "".join(filter(str.isdigit, phone_number))

    if not clean_number:
        return "Error: Invalid phone number"

    encoded_message = urllib.parse.quote(message)

    link = f"{base_url}{clean_number}"
    if message:
        link += f"?text={encoded_message}"

    return link


if __name__ == "__main__":
    print("--- WhatsApp Link Generator (Python Utility) ---")
    phone = input("Enter phone number (with country code): ")
    msg = input("Enter message (optional): ")

    print("\nGenerated Link:")
    print(generate_whatsapp_link(phone, msg))
