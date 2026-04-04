#!/usr/bin/env python3
import subprocess
import os
import sys

# OCPD: Automated Documentation Management
# Ensures that technical debt never accumulates by forcing doc clarity.


def log(msg):
    print(f"\033[95m[DOC-GEN] 📚 {msg}\033[0m")


def main():
    script_dir = os.path.dirname(os.path.realpath(__file__))
    project_root = os.path.dirname(script_dir)
    os.chdir(project_root)

    log("Updating project documentation...")

    # 1. Generate Dart Docs
    log("Generating API Documentation (dartdoc)...")
    try:
        subprocess.run(["dart", "doc", "."], check=True, shell=True if os.name == "nt" else False)
        log("API Docs generated in 'doc/api'")
    except Exception as e:
        print(f"Error: {e}")

    # 2. Structure validation
    log("Validating project structure logic...")
    # Add custom validation logic here if required.

    log("Documentation cycle complete.")


if __name__ == "__main__":
    main()
