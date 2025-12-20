.PHONY: setup check build test clean

# OCPD: Executive Command Forwarding
# Ensures a single source of truth via tools/cli.py

setup:
	python tools/cli.py setup

check:
	python tools/cli.py check

build-web:
	python tools/cli.py build --platform web

build-android:
	python tools/cli.py build --platform android

test:
	flutter test --coverage

clean:
	flutter clean
	rm -rf build/
