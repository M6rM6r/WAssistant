import subprocess
import sys
import re
from typing import Dict, Any

# OCPD: Executive Quality Gate Configuration
THRESHOLD_COVERAGE = 85.0
STRICT_MODE = True

def log(message: str, level: str = "INFO") -> None:
    levels = {"INFO": "\033[94m", "SUCCESS": "\033[92m", "FAIL": "\033[91m"}
    print(f"{levels.get(level, '')}[{level}] {message}\033[0m")

def run_tests() -> Dict[str, Any]:
    """Execute Flutter tests and parse coverage metrics."""
    log("Executing Automated Test Suite...")
    try:
        # Run with machine-readable output if possible, or parse lcov
        subprocess.run(["flutter", "test", "--coverage"], check=True, capture_output=True)

        # Parse lcov.info for total percentage
        with open("coverage/lcov.info", "r") as f:
            content = f.read()

        # INTJ Logic: Calculate coverage manually from LCOV for accuracy
        lines_found = len(re.findall(r"^DA:", content, re.MULTILINE))
        lines_hit = len([m for m in re.findall(r"^DA:\d+,(\d+)", content, re.MULTILINE) if int(m) > 0])

        coverage = (lines_hit / lines_found) * 100 if lines_found > 0 else 0
        return {"success": True, "coverage": round(coverage, 2)}
    except Exception as e:
        return {"success": False, "error": str(e)}

def monitor_system() -> None:
    """Run full system quality check."""
    results = run_tests()

    if not results["success"]:
        log(f"Test Execution Failed: {results.get('error')}", "FAIL")
        sys.exit(1)

    coverage = results["coverage"]
    log(f"Current System Coverage: {coverage}%", "INFO")

    if coverage < THRESHOLD_COVERAGE:
        log(f"Quality Gate Rejected: Coverage {coverage}% < {THRESHOLD_COVERAGE}%", "FAIL")
        if STRICT_MODE:
            sys.exit(1)

    log("System integrity verified. Platinum Build Status achieved.", "SUCCESS")

if __name__ == "__main__":
    monitor_system()
