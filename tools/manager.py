#!/usr/bin/env python3
import argparse
import subprocess
import sys
import os
import time

# OCPD: Color codes for structured terminal output
class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

def log(message, level="INFO"):
    timestamp = time.strftime("%H:%M:%S")
    if level == "INFO":
        print(f"{Colors.BLUE}[{timestamp}] ℹ️  {message}{Colors.ENDC}")
    elif level == "SUCCESS":
        print(f"{Colors.GREEN}[{timestamp}] ✅ {message}{Colors.ENDC}")
    elif level == "WARN":
        print(f"{Colors.WARNING}[{timestamp}] ⚠️  {message}{Colors.ENDC}")
    elif level == "ERROR":
        print(f"{Colors.FAIL}[{timestamp}] ❌ {message}{Colors.ENDC}")
    elif level == "HEADER":
        print(f"\n{Colors.BOLD}{Colors.HEADER}=== {message} ==={Colors.ENDC}")

def run_command(command, cwd=None, ignore_error=False):
    """Executes a shell command and logs output."""
    log(f"Executing: {command}", "INFO")
    try:
        shell = True if os.name == 'nt' else False
        result = subprocess.run(
            command,
            cwd=cwd,
            shell=shell,
            check=not ignore_error,
            text=True,
            capture_output=False
        )
        return result.returncode == 0
    except subprocess.CalledProcessError as e:
        if not ignore_error:
            log(f"Command failed: {command}", "ERROR")
            sys.exit(1)
        return False

def clean_project():
    log("Cleaning Project", "HEADER")
    run_command("flutter clean")
    run_command("flutter pub get")
    log("Project Cleaned & Dependencies Updated", "SUCCESS")

def generate_assets():
    log("Generating Assets & Icons", "HEADER")
    run_command("dart run flutter_launcher_icons")
    run_command("dart run flutter_native_splash:create")
    log("Assets Generated", "SUCCESS")

def code_analysis():
    log("Running Static Analysis", "HEADER")
    run_command("dart analyze .")
    log("Code Analysis Complete", "SUCCESS")

def run_tests_with_coverage():
    log("Running Tests with Coverage", "HEADER")
    run_command("flutter test --coverage")
    if os.name != 'nt': # lcov is mostly a unix tool
        run_command("genhtml coverage/lcov.info -o coverage/html")
        log("Coverage report generated in coverage/html/index.html", "SUCCESS")
    else:
        log("Coverage info generated in coverage/lcov.info", "INFO")

def build_web():
    log("Building for Web", "HEADER")
    run_command("flutter build web --release --base-href '/'")
    log("Web Build Complete: build/web", "SUCCESS")

def build_android():
    log("Building for Android (APK)", "HEADER")
    run_command("flutter build apk --release")
    log("Android APK Build Complete: build/app/outputs/flutter-apk/app-release.apk", "SUCCESS")

def git_commit(message):
    log("Git Commit & Push", "HEADER")
    run_command("git add .")
    run_command(f'git commit -m "{message}"', ignore_error=True)
    run_command("git push")
    log("Changes pushed to remote", "SUCCESS")

def main():
    parser = argparse.ArgumentParser(description="WAssistant Project Manager (INTJ Edition)")
    parser.add_argument(
        "action",
        choices=[
            "clean",
            "icons",
            "check",
            "test",
            "build-web",
            "build-android",
            "bulk-links",
            "deploy",
            "doc",
            "all",
        ],
        help="Action to perform",
    )
    parser.add_argument("--msg", help="Commit message for deploy", default="Auto-update via Manager")
    parser.add_argument("--input", help="Bulk CSV input path (for bulk-links)")
    parser.add_argument("--output", help="Bulk CSV output path (for bulk-links)")
    parser.add_argument("--qr", action="store_true", help="Generate QR PNGs for bulk-links")

    args = parser.parse_args()

    # Move to project root
    script_dir = os.path.dirname(os.path.realpath(__file__))
    project_root = os.path.dirname(script_dir)
    os.chdir(project_root)

    log(f"Working Directory: {project_root}", "INFO")

    if args.action == "clean":
        clean_project()
    elif args.action == "icons":
        generate_assets()
    elif args.action == "check":
        code_analysis()
    elif args.action == "test":
        run_tests_with_coverage()
    elif args.action == "build-web":
        build_web()
    elif args.action == "build-android":
        build_android()
    elif args.action == "bulk-links":
        inp = args.input or "bulk_input.csv"
        out = args.output or "bulk_output.csv"
        cmd = f"python python_scripts/bulk_generate_links.py --in {inp} --out {out}"
        if args.qr:
            cmd += " --qr"
        run_command(cmd)
    elif args.action == "deploy":
        code_analysis()
        run_tests_with_coverage()
        git_commit(args.msg)
    elif args.action == "doc":
        run_command("python tools/doc_gen.py")
    elif args.action == "all":
        clean_project()
        generate_assets()
        code_analysis()
        run_tests_with_coverage()
        build_web()
        build_android()

    log("Operation Completed Successfully.", "SUCCESS")

if __name__ == "__main__":
    main()
