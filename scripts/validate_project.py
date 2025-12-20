import os
import sys
import yaml


def check_assets_existence():
    print("Checking assets...")
    try:
        with open("pubspec.yaml", "r") as f:
            pubspec = yaml.safe_load(f)
    except FileNotFoundError:
        print("Error: pubspec.yaml not found in current directory.")
        return False

    assets = pubspec.get("flutter", {}).get("assets", [])
    missing_assets = []

    for asset in assets:
        # Handle directory assets (ending with /)
        if asset.endswith("/"):
            if not os.path.isdir(asset):
                missing_assets.append(asset)
        else:
            if not os.path.exists(asset):
                missing_assets.append(asset)

    if missing_assets:
        print("Error: The following assets are missing:")
        for asset in missing_assets:
            print(f"  - {asset}")
        return False

    print("All assets verified.")
    return True


def check_lib_structure():
    print("Checking lib structure...")
    required_dirs = [
        "lib/models",
        "lib/pages",
        "lib/providers",
        "lib/services",
        "lib/widgets",
        "lib/utils",
    ]
    missing_dirs = []

    for d in required_dirs:
        if not os.path.isdir(d):
            missing_dirs.append(d)

    if missing_dirs:
        print("Warning: Missing standard directory structure:")
        for d in missing_dirs:
            print(f"  - {d}")
        # Not fatal, just warning
        return True
    print("Lib structure verified.")
    return True


if __name__ == "__main__":
    print("--- WAssistant Project Validator ---")
    assets_ok = check_assets_existence()
    structure_ok = check_lib_structure()

    if assets_ok and structure_ok:
        print("\nProject validation passed. Ready for build.")
        sys.exit(0)
    else:
        print("\nProject validation failed.")
        sys.exit(1)
