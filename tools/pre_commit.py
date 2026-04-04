#!/usr/bin/env python3
import subprocess
import sys
import os

# OCPD: Pre-Commit Hook Script
# Enforces quality standards before allowing a commit.
# Can be linked to .git/hooks/pre-commit manually.


def log(message, type="INFO"):
    colors = {"INFO": "\033[94m", "SUCCESS": "\033[92m", "ERROR": "\033[91m", "RESET": "\033[0m"}
    print(f"{colors.get(type, colors['RESET'])}[{type}] {message}{colors['RESET']}")


def run_step(name, command):
    log(f"Running {name}...", "INFO")
    try:
        subprocess.run(
            command, check=True, shell=True if os.name == "nt" else False, stdout=subprocess.DEVNULL
        )
        log(f"{name} Passed", "SUCCESS")
        return True
    except subprocess.CalledProcessError:
        log(f"{name} Failed", "ERROR")
        return False


def main():
    # Move to project root
    script_dir = os.path.dirname(os.path.realpath(__file__))
    project_root = os.path.dirname(script_dir)
    os.chdir(project_root)

    steps = [
        ("Static Analysis", "dart analyze ."),
        ("Unit Tests", "flutter test"),
        ("Format Check", "dart format . --set-exit-if-changed"),
    ]

    failed = False
    for name, cmd in steps:
        if not run_step(name, cmd):
            failed = True

    if failed:
        log("Pre-commit checks failed. Please fix issues before committing.", "ERROR")
        sys.exit(1)

    log("All systems operational. Ready to commit.", "SUCCESS")


if __name__ == "__main__":
    main()
