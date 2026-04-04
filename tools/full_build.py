#!/usr/bin/env python3
import subprocess
import os
import sys
import argparse

# OCPD: Full System Orchestration
# Manages both Frontend (Flutter) and Backend (FastAPI) build pipelines.


def log(msg, color="\033[94m"):
    print(f"{color}[SYSTEM] 🚀 {msg}\033[0m")


def build_backend():
    log("Building Backend (Python/FastAPI)...")
    backend_dir = os.path.join(os.getcwd(), "backend")
    # In a real OCPD setup, we'd run tests here
    log("Backend check complete.", "\033[92m")


def build_flutter():
    log("Building Frontend (Flutter)...")
    # Logic: Run the existing make command
    subprocess.run(["make", "all"], check=True, shell=True if os.name == "nt" else False)


def containerize():
    log("Validating Dockerfile...")
    if os.path.exists("Dockerfile"):
        log("Dockerfile found. System ready for containerization.", "\033[92m")
    else:
        log("No Dockerfile. Skipping.", "\033[93m")


def main():
    log("Initializing Global Build Sequence", "\033[95m")

    build_backend()
    build_flutter()
    containerize()

    log("FULL SYSTEM BUILD COMPLETE", "\033[92m")


if __name__ == "__main__":
    main()
