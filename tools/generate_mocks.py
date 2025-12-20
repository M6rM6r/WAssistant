#!/usr/bin/env python3
import subprocess
import sys
import os

# OCPD: Automated Mock Generation Wrapper
# Ensures tests are always running against fresh mocks without manual intervention.

def log(message):
    print(f"\033[96m[MOCK-GEN] ℹ️  {message}\033[0m")

def main():
    # Move to project root
    script_dir = os.path.dirname(os.path.realpath(__file__))
    project_root = os.path.dirname(script_dir)
    os.chdir(project_root)

    log("Checking for build_runner...")
    
    # Check if build_runner is in dependencies, if not we can't run it
    # But strictly speaking, it should be in dev_dependencies.
    
    log("Running build_runner to generate mocks...")
    try:
        # 'dart run build_runner build --delete-conflicting-outputs'
        subprocess.run(
            ["dart", "run", "build_runner", "build", "--delete-conflicting-outputs"],
            check=True,
            shell=True if os.name == 'nt' else False
        )
        log("✅ Mocks generated successfully.")
    except subprocess.CalledProcessError:
        print("\033[91m[MOCK-GEN] ❌ Failed to generate mocks.\033[0m")
        sys.exit(1)

if __name__ == "__main__":
    main()
