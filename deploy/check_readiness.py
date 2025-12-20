#!/usr/bin/env python3
"""
═══════════════════════════════════════════════════════════════════════════════
WASSISTANT - Deployment Status Checker
═══════════════════════════════════════════════════════════════════════════════
"""

from __future__ import annotations

import subprocess
import sys
from dataclasses import dataclass
from typing import Literal

try:
    from rich.console import Console
    from rich.table import Table
    from rich.panel import Panel
except ImportError:
    print("Installing rich...")
    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", "rich", "-q"]
    )
    from rich.console import Console
    from rich.table import Table
    from rich.panel import Panel


console = Console()


@dataclass
class CheckResult:
    name: str
    status: Literal["pass", "fail", "warn"]
    message: str


def check_command(cmd: str) -> bool:
    """Check if a command is available."""
    import shutil

    # First try shutil.which (most reliable)
    if shutil.which(cmd):
        return True
    # Fallback to subprocess
    try:
        result = subprocess.run(
            [cmd, "--version"],
            capture_output=True,
            timeout=10,
            shell=True,
        )
        return result.returncode == 0
    except Exception:
        return False


def check_file_exists(path: str) -> bool:
    """Check if a file exists."""
    from pathlib import Path

    return Path(path).exists()


def run_checks() -> list[CheckResult]:
    """Run all deployment readiness checks."""
    results = []

    # Tools
    tools = [
        ("flutter", "Flutter SDK"),
        ("python", "Python"),
        ("docker", "Docker"),
        ("node", "Node.js"),
        ("npm", "NPM"),
    ]

    for cmd, name in tools:
        if check_command(cmd):
            results.append(CheckResult(name, "pass", "Installed"))
        else:
            results.append(CheckResult(name, "fail", "Not found"))

    # Optional tools
    optional = [
        ("firebase", "Firebase CLI"),
        ("gcloud", "Google Cloud CLI"),
        ("just", "Just (task runner)"),
    ]

    for cmd, name in optional:
        if check_command(cmd):
            results.append(CheckResult(name, "pass", "Installed"))
        else:
            results.append(
                CheckResult(name, "warn", "Not installed (optional)")
            )

    # Required files
    required_files = [
        ("pubspec.yaml", "Flutter pubspec"),
        ("requirements.txt", "Python requirements"),
        ("docker-compose.yml", "Docker Compose"),
        ("Dockerfile", "Dockerfile"),
        (".github/workflows/deploy.yml", "CI/CD workflow"),
        ("firebase.json", "Firebase config"),
    ]

    for path, name in required_files:
        if check_file_exists(path):
            results.append(CheckResult(name, "pass", "Present"))
        else:
            results.append(CheckResult(name, "fail", "Missing"))

    # Environment
    if check_file_exists(".env"):
        results.append(CheckResult(".env file", "pass", "Configured"))
    elif check_file_exists(".env.example"):
        results.append(
            CheckResult(".env file", "warn", "Using .env.example as template")
        )
    else:
        results.append(CheckResult(".env file", "fail", "Missing"))

    return results


def main() -> None:
    """Main entry point."""
    console.print(
        Panel.fit(
            "[bold blue]WASSISTANT - Deployment Readiness Check[/bold blue]",
            border_style="blue",
        )
    )
    console.print()

    results = run_checks()

    table = Table(title="Deployment Checklist")
    table.add_column("Component", style="cyan")
    table.add_column("Status", justify="center")
    table.add_column("Details", style="dim")

    status_icons = {
        "pass": "[green]✓[/green]",
        "fail": "[red]✗[/red]",
        "warn": "[yellow]⚠[/yellow]",
    }

    for result in results:
        table.add_row(
            result.name,
            status_icons[result.status],
            result.message,
        )

    console.print(table)
    console.print()

    # Summary
    passed = sum(1 for r in results if r.status == "pass")
    failed = sum(1 for r in results if r.status == "fail")
    warned = sum(1 for r in results if r.status == "warn")

    if failed == 0:
        console.print("[bold green]✓ Ready for deployment![/bold green]")
    else:
        console.print(
            f"[bold red]✗ {failed} issues must be fixed before deployment[/bold red]"
        )

    console.print(
        f"\n[dim]Passed: {passed} | Warnings: {warned} | Failed: {failed}[/dim]"
    )


if __name__ == "__main__":
    main()
