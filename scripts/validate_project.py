#!/usr/bin/env python3
"""
═══════════════════════════════════════════════════════════════════════════════
WASSISTANT - Project Validation Script (INTJ/OCPD: Comprehensive Checks)
═══════════════════════════════════════════════════════════════════════════════
Validates project structure, dependencies, and configuration integrity.
"""

from __future__ import annotations

import json
import os
import subprocess
import sys
from pathlib import Path
from typing import NamedTuple

try:
    import yaml  # type: ignore[import-untyped]
except ImportError:
    yaml = None  # type: ignore

try:
    from rich.console import Console
    from rich.table import Table

    console = Console()
except ImportError:
    console = None  # type: ignore
    Table = None  # type: ignore


class ValidationResult(NamedTuple):
    name: str
    passed: bool
    message: str


class ProjectValidator:
    """Comprehensive project validation suite."""

    def __init__(self, project_root: Path | None = None):
        self.root = project_root or Path(__file__).parent.parent.resolve()
        self.results: list[ValidationResult] = []

    def log(self, message: str, status: str = "info") -> None:
        """Log message with appropriate styling."""
        icons = {"pass": "✅", "fail": "❌", "warn": "⚠️", "info": "ℹ️"}
        icon = icons.get(status, "")
        if console:
            colors = {"pass": "green", "fail": "red", "warn": "yellow", "info": "blue"}
            console.print(f"{icon} [{colors.get(status, 'white')}]{message}[/]")
        else:
            print(f"{icon} {message}")

    def add_result(self, name: str, passed: bool, message: str) -> None:
        """Add a validation result."""
        self.results.append(ValidationResult(name, passed, message))
        self.log(f"{name}: {message}", "pass" if passed else "fail")

    # ─────────────────────────────────────────────────────────────────────────
    # VALIDATION CHECKS
    # ─────────────────────────────────────────────────────────────────────────

    def check_pubspec(self) -> None:
        """Validate pubspec.yaml exists and is parseable."""
        pubspec_path = self.root / "pubspec.yaml"
        if not pubspec_path.exists():
            self.add_result("pubspec.yaml", False, "File not found")
            return

        if yaml:
            try:
                with open(pubspec_path) as f:
                    data = yaml.safe_load(f)
                name = data.get("name", "unknown")
                version = data.get("version", "unknown")
                self.add_result("pubspec.yaml", True, f"{name} v{version}")
            except Exception as e:
                self.add_result("pubspec.yaml", False, f"Parse error: {e}")
        else:
            self.add_result("pubspec.yaml", True, "File exists (yaml not available)")

    def check_assets(self) -> None:
        """Validate all declared assets exist."""
        pubspec_path = self.root / "pubspec.yaml"
        if not pubspec_path.exists() or not yaml:
            self.add_result("Assets", False, "Cannot check (pubspec or yaml missing)")
            return

        try:
            with open(pubspec_path) as f:
                data = yaml.safe_load(f)

            assets = data.get("flutter", {}).get("assets", [])
            missing = []

            for asset in assets:
                asset_path = self.root / asset
                if asset.endswith("/"):
                    if not asset_path.is_dir():
                        missing.append(asset)
                elif not asset_path.exists():
                    missing.append(asset)

            if missing:
                self.add_result("Assets", False, f"Missing: {', '.join(missing)}")
            else:
                self.add_result("Assets", True, f"{len(assets)} assets verified")
        except Exception as e:
            self.add_result("Assets", False, f"Error: {e}")

    def check_lib_structure(self) -> None:
        """Validate lib directory structure."""
        required_dirs = ["models", "pages", "providers", "services", "widgets", "utils"]
        lib_path = self.root / "lib"

        if not lib_path.exists():
            self.add_result("Lib Structure", False, "lib/ directory not found")
            return

        missing = [d for d in required_dirs if not (lib_path / d).is_dir()]
        if missing:
            self.add_result("Lib Structure", False, f"Missing: {', '.join(missing)}")
        else:
            self.add_result("Lib Structure", True, f"{len(required_dirs)} directories verified")

    def check_required_files(self) -> None:
        """Validate required project files exist."""
        required = [
            "pubspec.yaml",
            "analysis_options.yaml",
            "README.md",
            ".gitignore",
            "lib/main.dart",
        ]

        missing = [f for f in required if not (self.root / f).exists()]
        if missing:
            self.add_result("Required Files", False, f"Missing: {', '.join(missing)}")
        else:
            self.add_result("Required Files", True, f"{len(required)} files verified")

    def check_pyproject(self) -> None:
        """Validate pyproject.toml configuration."""
        pyproject_path = self.root / "pyproject.toml"
        if not pyproject_path.exists():
            self.add_result("pyproject.toml", False, "File not found")
            return

        try:
            import tomllib

            with open(pyproject_path, "rb") as f:
                data = tomllib.load(f)
            name = data.get("project", {}).get("name", "unknown")
            version = data.get("project", {}).get("version", "unknown")
            self.add_result("pyproject.toml", True, f"{name} v{version}")
        except ImportError:
            self.add_result("pyproject.toml", True, "File exists (tomllib not available)")
        except Exception as e:
            self.add_result("pyproject.toml", False, f"Parse error: {e}")

    def check_package_json(self) -> None:
        """Validate package.json configuration."""
        pkg_path = self.root / "package.json"
        if not pkg_path.exists():
            self.add_result("package.json", False, "File not found")
            return

        try:
            with open(pkg_path) as f:
                data = json.load(f)
            name = data.get("name", "unknown")
            version = data.get("version", "unknown")
            self.add_result("package.json", True, f"{name} v{version}")
        except Exception as e:
            self.add_result("package.json", False, f"Parse error: {e}")

    def check_flutter_sdk(self) -> None:
        """Validate Flutter SDK is available."""
        try:
            result = subprocess.run(
                ["flutter", "--version"],
                capture_output=True,
                text=True,
                timeout=30,
                shell=os.name == "nt",
            )
            if result.returncode == 0:
                version = result.stdout.split("\n")[0].strip()
                self.add_result("Flutter SDK", True, version)
            else:
                self.add_result("Flutter SDK", False, "Command failed")
        except FileNotFoundError:
            self.add_result("Flutter SDK", False, "Not found in PATH")
        except Exception as e:
            self.add_result("Flutter SDK", False, str(e))

    def check_python_version(self) -> None:
        """Validate Python version."""
        version = sys.version.split()[0]
        major, minor = map(int, version.split(".")[:2])
        if major >= 3 and minor >= 11:
            self.add_result("Python", True, f"v{version}")
        else:
            self.add_result("Python", False, f"v{version} (requires 3.11+)")

    def check_env_file(self) -> None:
        """Validate .env file exists."""
        env_path = self.root / ".env"
        if env_path.exists():
            self.add_result(".env", True, "File exists")
        else:
            self.add_result(".env", False, "File not found (may be required)")

    # ─────────────────────────────────────────────────────────────────────────
    # RUN ALL CHECKS
    # ─────────────────────────────────────────────────────────────────────────

    def run_all(self) -> bool:
        """Run all validation checks and return overall status."""
        self.log("═══ WAssistant Project Validator ═══", "info")
        self.log(f"Project Root: {self.root}", "info")
        print()

        # Run all checks
        self.check_flutter_sdk()
        self.check_python_version()
        self.check_pubspec()
        self.check_assets()
        self.check_lib_structure()
        self.check_required_files()
        self.check_pyproject()
        self.check_package_json()
        self.check_env_file()

        # Summary
        print()
        passed = sum(1 for r in self.results if r.passed)
        failed = sum(1 for r in self.results if not r.passed)

        if console and Table:
            table = Table(title="Validation Summary")
            table.add_column("Status", style="bold")
            table.add_column("Count")
            table.add_row("✅ Passed", f"[green]{passed}[/]")
            table.add_row("❌ Failed", f"[red]{failed}[/]")
            console.print(table)
        else:
            print(f"Passed: {passed}, Failed: {failed}")

        return failed == 0


def main() -> None:
    """Main entry point."""
    validator = ProjectValidator()
    success = validator.run_all()
    sys.exit(0 if success else 1)


if __name__ == "__main__":
    main()
