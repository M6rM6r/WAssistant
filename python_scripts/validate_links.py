import re
import sys


def validate_whatsapp_link(url):
    """
    Validates if a given URL is a properly formatted WhatsApp API link.
    """
    # Regex for standard wa.me or api.whatsapp.com links
    # Handles:
    # https://wa.me/12345
    # https://api.whatsapp.com/send?phone=12345

    pattern = (
        r"^(https?:\/\/)?(www\.)?"
        r"(wa\.me\/|api\.whatsapp\.com\/send\/?\?phone=)"
        r"(\d+)(.*)$"
    )

    match = re.match(pattern, url)
    if match:
        number = match.group(4)
        print(f"✅ Valid Link for number: {number}")
        return True
    else:
        print("❌ Invalid WhatsApp Link format.")
        return False


if __name__ == "__main__":
    print("--- WhatsApp Link Validator ---")
    if len(sys.argv) > 1:
        url_to_check = sys.argv[1]
    else:
        url_to_check = input("Enter URL to validate: ")

    validate_whatsapp_link(url_to_check)
