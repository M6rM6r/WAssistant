#!/usr/bin/env python3
"""
Generate test coverage badge for README
INTJ: Visual, measurable quality indicator
"""
import re
import subprocess
from pathlib import Path


def get_coverage_percentage() -> float:
    """Extract coverage percentage from lcov.info"""
    try:
        result = subprocess.run(
            ["lcov", "--summary", "coverage/lcov.info"],
            capture_output=True,
            text=True,
            check=True,
        )

        # Parse: "lines......: 85.2% (1234 of 1450 lines)"
        match = re.search(r"lines.*?:\s+([\d.]+)%", result.stdout)
        if match:
            return float(match.group(1))
        return 0.0
    except Exception as e:
        print(f"Error getting coverage: {e}")
        return 0.0


def get_badge_color(coverage: float) -> str:
    """Get badge color based on coverage percentage"""
    if coverage >= 90:
        return "brightgreen"
    elif coverage >= 80:
        return "green"
    elif coverage >= 70:
        return "yellowgreen"
    elif coverage >= 60:
        return "yellow"
    elif coverage >= 50:
        return "orange"
    else:
        return "red"


def generate_badge_url(coverage: float) -> str:
    """Generate shields.io badge URL"""
    color = get_badge_color(coverage)
    return f"https://img.shields.io/badge/coverage-{coverage:.1f}%25-{color}"


def update_readme(badge_url: str):
    """Update README.md with new coverage badge"""
    readme_path = Path("README.md")
    if not readme_path.exists():
        print("README.md not found")
        return

    content = readme_path.read_text()

    # Replace or insert badge
    badge_markdown = f"![Coverage]({badge_url})"

    if "![Coverage]" in content:
        content = re.sub(r"!\[Coverage\]\(.*?\)", badge_markdown, content)
    else:
        # Insert after first heading
        content = re.sub(
            r"(#.*?\n)",
            f"\\1\n{badge_markdown}\n",
            content,
            count=1,
        )

    readme_path.write_text(content)
    print(f"✅ README updated with badge: {badge_markdown}")


def main():
    """Generate and update coverage badge"""
    coverage = get_coverage_percentage()
    print(f"Test coverage: {coverage:.1f}%")

    badge_url = generate_badge_url(coverage)
    print(f"Badge URL: {badge_url}")

    update_readme(badge_url)


if __name__ == "__main__":
    main()
