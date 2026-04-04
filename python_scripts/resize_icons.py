import os
from PIL import Image


def resize_icons(source_image_path, output_dir="web/icons"):
    """
    Resizes a source icon to standard PWA sizes.
    Requires: pip install Pillow
    """
    if not os.path.exists(source_image_path):
        print("Error: Source image not found:")
        print(source_image_path)
        print("Please place your high-res icon (e.g., 512x512)")
        print("At the source path.")
        return

    sizes = [192, 512]

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    try:
        with Image.open(source_image_path) as img:
            # Ensure it's square
            if img.width != img.height:
                print("Warning: Source image is not square. " "It will be resized non-uniformly.")

            for size in sizes:
                resized_img = img.resize(
                    (size, size),
                    Image.Resampling.LANCZOS,
                )

                # Standard Icon
                output_path = os.path.join(output_dir, f"Icon-{size}.png")
                resized_img.save(output_path)
                print(f"Generated {output_path}")

                # Maskable Icon (Safe zone padding)
                # Create a basic maskable version by adding padding.
                # A proper maskable icon usually needs design adjustments;
                # this is a helper.
                maskable_size = int(size * 0.8)
                padding = (size - maskable_size) // 2

                maskable_canvas = Image.new(
                    "RGBA",
                    (size, size),
                    (255, 255, 255, 0),
                )  # Transparent
                # Or use a background color if preferred
                # maskable_canvas = Image.new("RGBA", (size, size), "#FFFFFF")

                resized_for_mask = img.resize(
                    (maskable_size, maskable_size),
                    Image.Resampling.LANCZOS,
                )

                maskable_canvas.paste(
                    resized_for_mask,
                    (padding, padding),
                )

                maskable_path = os.path.join(
                    output_dir,
                    f"Icon-maskable-{size}.png",
                )
                maskable_canvas.save(maskable_path)
                print(f"Generated {maskable_path}")

    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    # You can change this to point to your main app icon in assets
    source_icon = "assets/app_icon.png"
    print(f"Looking for source icon at: {source_icon}")
    resize_icons(source_icon)
