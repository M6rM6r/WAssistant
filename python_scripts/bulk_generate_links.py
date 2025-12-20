import csv
import argparse
import urllib.parse
import os

# INTJ Strategy: Bulk processing for high efficiency
# Purpose: Generate 100s of WhatsApp links from a contact list instantly.

def generate_wa_link(phone, message=""):
    # Clean phone: only digits
    clean_phone = "".join(filter(str.isdigit, phone))
    base_url = "https://wa.me/"

    if message:
        encoded_msg = urllib.parse.quote(message)
        return f"{base_url}{clean_phone}?text={encoded_msg}"

    return f"{base_url}{clean_phone}"

def main():
    parser = argparse.ArgumentParser(description="WAssistant Bulk Link Generator")
    parser.add_argument("--in", dest="input_file", required=True, help="Input CSV file")
    parser.add_argument("--out", dest="output_file", required=True, help="Output CSV file")
    parser.add_argument("--qr", action="store_true", help="Generate QR code PNGs as well")

    args = parser.parse_args()

    if not os.path.exists(args.input_file):
        print(f"Error: {args.input_file} not found.")
        return

    results = []
    with open(args.input_file, mode='r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            phone = row.get('phone', '')
            message = row.get('message', '')
            if phone:
                link = generate_wa_link(phone, message)
                results.append({'phone': phone, 'link': link})

    with open(args.output_file, mode='w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=['phone', 'link'])
        writer.writeheader()
        writer.writerows(results)

    print(f"✅ Success: {len(results)} links generated in {args.output_file}")

if __name__ == "__main__":
    main()
