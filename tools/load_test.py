#!/usr/bin/env python3
"""
═══════════════════════════════════════════════════════════════════════════════
WASSISTANT - Load Tester (Stress Testing)
═══════════════════════════════════════════════════════════════════════════════
"""

from __future__ import annotations

import asyncio
import statistics
import time
from dataclasses import dataclass, field

try:
    import httpx
    from rich.console import Console
    from rich.progress import Progress, SpinnerColumn, BarColumn, TextColumn
    from rich.table import Table
except ImportError:
    import subprocess
    import sys
    subprocess.check_call([sys.executable, "-m", "pip", "install", "httpx", "rich", "-q"])
    import httpx
    from rich.console import Console
    from rich.progress import Progress, SpinnerColumn, BarColumn, TextColumn
    from rich.table import Table


console = Console()


@dataclass
class LoadTestResult:
    """Results from a load test."""

    total_requests: int = 0
    successful: int = 0
    failed: int = 0
    response_times: list[float] = field(default_factory=list)
    errors: list[str] = field(default_factory=list)
    duration: float = 0.0

    @property
    def success_rate(self) -> float:
        if self.total_requests == 0:
            return 0.0
        return (self.successful / self.total_requests) * 100

    @property
    def avg_response_time(self) -> float:
        if not self.response_times:
            return 0.0
        return statistics.mean(self.response_times)

    @property
    def p50(self) -> float:
        if not self.response_times:
            return 0.0
        return statistics.median(self.response_times)

    @property
    def p95(self) -> float:
        if len(self.response_times) < 2:
            return 0.0
        sorted_times = sorted(self.response_times)
        idx = int(len(sorted_times) * 0.95)
        return sorted_times[idx]

    @property
    def p99(self) -> float:
        if len(self.response_times) < 2:
            return 0.0
        sorted_times = sorted(self.response_times)
        idx = int(len(sorted_times) * 0.99)
        return sorted_times[idx]

    @property
    def rps(self) -> float:
        if self.duration == 0:
            return 0.0
        return self.total_requests / self.duration


async def make_request(
    client: httpx.AsyncClient,
    url: str,
    result: LoadTestResult,
) -> None:
    """Make a single request and record results."""
    start = time.perf_counter()
    try:
        response = await client.get(url)
        elapsed = (time.perf_counter() - start) * 1000
        result.response_times.append(elapsed)

        if response.status_code == 200:
            result.successful += 1
        else:
            result.failed += 1
            result.errors.append(f"HTTP {response.status_code}")

    except Exception as e:
        result.failed += 1
        result.errors.append(str(e)[:50])

    result.total_requests += 1


async def run_load_test(
    url: str,
    total_requests: int = 100,
    concurrency: int = 10,
) -> LoadTestResult:
    """Run load test against URL."""
    result = LoadTestResult()

    console.print(f"\n[bold blue]Load Test Configuration[/bold blue]")
    console.print(f"  URL: {url}")
    console.print(f"  Requests: {total_requests}")
    console.print(f"  Concurrency: {concurrency}\n")

    start_time = time.perf_counter()

    async with httpx.AsyncClient(timeout=30.0) as client:
        with Progress(
            SpinnerColumn(),
            TextColumn("[progress.description]{task.description}"),
            BarColumn(),
            TextColumn("[progress.percentage]{task.percentage:>3.0f}%"),
            console=console,
        ) as progress:
            task = progress.add_task("Running load test...", total=total_requests)

            # Create batches of concurrent requests
            pending = []
            for _ in range(total_requests):
                pending.append(make_request(client, url, result))

                if len(pending) >= concurrency:
                    await asyncio.gather(*pending)
                    progress.update(task, advance=len(pending))
                    pending = []

            # Remaining requests
            if pending:
                await asyncio.gather(*pending)
                progress.update(task, advance=len(pending))

    result.duration = time.perf_counter() - start_time
    return result


def print_results(result: LoadTestResult) -> None:
    """Print load test results."""
    table = Table(title="Load Test Results", show_header=True, header_style="bold cyan")
    table.add_column("Metric", style="cyan")
    table.add_column("Value", justify="right")

    table.add_row("Total Requests", str(result.total_requests))
    table.add_row("Successful", f"[green]{result.successful}[/green]")
    table.add_row("Failed", f"[red]{result.failed}[/red]")
    table.add_row("Success Rate", f"{result.success_rate:.1f}%")
    table.add_row("Duration", f"{result.duration:.2f}s")
    table.add_row("Requests/sec", f"{result.rps:.1f}")

    console.print(table)

    # Response time table
    time_table = Table(title="Response Times (ms)", show_header=True, header_style="bold cyan")
    time_table.add_column("Metric")
    time_table.add_column("Value", justify="right")

    time_table.add_row("Average", f"{result.avg_response_time:.1f}")
    time_table.add_row("P50 (Median)", f"{result.p50:.1f}")
    time_table.add_row("P95", f"{result.p95:.1f}")
    time_table.add_row("P99", f"{result.p99:.1f}")

    if result.response_times:
        time_table.add_row("Min", f"{min(result.response_times):.1f}")
        time_table.add_row("Max", f"{max(result.response_times):.1f}")

    console.print(time_table)

    # Errors
    if result.errors:
        console.print(f"\n[bold red]Errors ({len(result.errors)}):[/bold red]")
        for error in set(result.errors):
            count = result.errors.count(error)
            console.print(f"  • {error} (x{count})")


async def main() -> None:
    """Main entry point."""
    import sys

    url = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8000/health"
    requests = int(sys.argv[2]) if len(sys.argv) > 2 else 100
    concurrency = int(sys.argv[3]) if len(sys.argv) > 3 else 10

    result = await run_load_test(url, requests, concurrency)
    print_results(result)


if __name__ == "__main__":
    asyncio.run(main())
