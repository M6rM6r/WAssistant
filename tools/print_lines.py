import sys


def main():
    if len(sys.argv) < 2:
        print("Usage: python tools/print_lines.py <file>")
        sys.exit(1)
    path = sys.argv[1]
    with open(path, "r", encoding="utf-8") as f:
        for i, l in enumerate(f, start=1):
            print(f"{i:03}: {l.rstrip()}")


if __name__ == "__main__":
    main()
