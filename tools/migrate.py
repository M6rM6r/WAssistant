#!/usr/bin/env python3
"""
═══════════════════════════════════════════════════════════════════════════════
WASSISTANT - Database Migrations (Alembic-style)
═══════════════════════════════════════════════════════════════════════════════
"""

from __future__ import annotations

from datetime import datetime
from pathlib import Path
from typing import Any

try:
    from rich.console import Console
    from rich.table import Table
except ImportError:
    import subprocess
    import sys

    subprocess.check_call(
        [sys.executable, "-m", "pip", "install", "rich", "-q"]
    )
    from rich.console import Console
    from rich.table import Table


console = Console()

MIGRATIONS_DIR = Path(__file__).parent.parent / "migrations"
MIGRATIONS_DIR.mkdir(exist_ok=True)


class Migration:
    """Base migration class."""

    version: str
    description: str

    def up(self, db: Any) -> None:
        """Apply migration."""
        raise NotImplementedError

    def down(self, db: Any) -> None:
        """Rollback migration."""
        raise NotImplementedError


def create_migration(name: str) -> Path:
    """Create a new migration file."""
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    slug = name.lower().replace(" ", "_").replace("-", "_")
    filename = f"{timestamp}_{slug}.py"
    filepath = MIGRATIONS_DIR / filename
    # noqa: E501
    template = f'''#!/usr/bin/env python3
"""
Migration: {name}
Created: {datetime.now().isoformat()}
"""

from __future__ import annotations

from typing import Any


VERSION = "{timestamp}"
DESCRIPTION = "{name}"


def up(db: Any) -> None:
    """Apply migration."""
    # TODO: Implement migration
    pass


def down(db: Any) -> None:
    """Rollback migration."""
    # TODO: Implement rollback
    pass
'''

    filepath.write_text(template)
    console.print(f"[green]Created migration:[/green] {filepath}")
    return filepath


def list_migrations() -> None:
    """List all migrations."""
    table = Table(
        title="Migrations", show_header=True, header_style="bold cyan"
    )
    table.add_column("Version")
    table.add_column("Description")
    table.add_column("Status")

    migration_files = sorted(MIGRATIONS_DIR.glob("*.py"))

    for f in migration_files:
        if f.name.startswith("_"):
            continue

        version = f.stem.split("_")[0]
        desc_parts = f.stem.split("_", 2)
        desc = desc_parts[-1].replace("_", " ") if "_" in f.stem else f.stem

        table.add_row(version, desc.title(), "[yellow]pending[/yellow]")

    if not migration_files:
        console.print("[dim]No migrations found[/dim]")
    else:
        console.print(table)


def main() -> None:
    """CLI entry point."""
    import sys

    if len(sys.argv) < 2:
        console.print("Usage: python migrate.py [create|list|up|down] [name]")
        return

    command = sys.argv[1]

    if command == "create":
        if len(sys.argv) < 3:
            console.print("[red]Error: Migration name required[/red]")
            return
        name = " ".join(sys.argv[2:])
        create_migration(name)

    elif command == "list":
        list_migrations()

    elif command == "up":
        console.print("[yellow]Migration up not yet implemented[/yellow]")

    elif command == "down":
        console.print("[yellow]Migration down not yet implemented[/yellow]")

    else:
        console.print(f"[red]Unknown command: {command}[/red]")


if __name__ == "__main__":
    main()
