import os
import subprocess
import sys
from typing import List, Optional

import click
from rich.console import Console
from rich.panel import Panel
from rich.table import Table

# OCPD: Structured terminal output for system architects
console = Console()

def log_info(message: str) -> None:
    console.print(f"[blue][INFO][/blue] {message}")

def log_success(message: str) -> None:
    console.print(f"[green][SUCCESS][/green] {message}")

def log_error(message: str) -> None:
    console.print(f"[red][ERROR][/red] {message}")

def run_command(command: List[str], cwd: Optional[str] = None) -> None:
    """Executes a system command with real-time output stream."""
    cmd_display = command if isinstance(command, str) else " ".join(command)
    log_info(f"Executing: {cmd_display}")
    try:
        subprocess.run(command, cwd=cwd, check=True, text=True)
    except subprocess.CalledProcessError as e:
        log_error(f"Command failed with exit code {e.returncode}")
        sys.exit(e.returncode)

@click.group()
def cli() -> None:
    """WAssistant CLI: Precision Management Tool."""
    pass

@cli.command()
def check() -> None:
    """Run all system checks (Flutter, Python, Web)."""
    console.print(Panel("Running Strategic Analysis", style="bold blue"))

    # Flutter Checks
    log_info("Analyzing Flutter...")
    run_command(["flutter", "analyze"])

    # Python Checks
    log_info("Analyzing Python...")
    run_command(["ruff", "check", "."])
    run_command(["mypy", "."])

    # Web Checks
    log_info("Analyzing Web (Node)...")
    run_command(["npm", "run", "lint"])

    log_success("System integrity verified.")

@cli.command()
@click.option("--platform", type=click.Choice(["web", "android", "ios", "all"]), default="web")
def build(platform: str) -> None:
    """Production artifact generation."""
    if platform in ["web", "all"]:
        log_info("Building Web Release...")
        run_command(["flutter", "build", "web", "--release", "--base-href", "/"])

    if platform in ["android", "all"]:
        log_info("Building Android AAB...")
        run_command(["flutter", "build", "appbundle", "--release"])

@cli.command()
def setup() -> None:
    """Initial system synchronization."""
    log_info("Syncing dependencies...")
    run_command(["flutter", "pub", "get"])
    run_command(["pip", "install", "-r", "requirements.txt"])
    run_command(["npm", "install"])
    log_success("Environment synchronized.")

if __name__ == "__main__":
    cli()
