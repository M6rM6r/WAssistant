FROM ubuntu:22.04

# Install basic deps
RUN apt-get update && apt-get install -y \
    curl \
    git \
    unzip \
    xz-utils \
    libglu1-mesa \
    python3 \
    python3-pip \
    nodejs \
    npm \
  && rm -rf /var/lib/apt/lists/*

# Install Flutter (stable, slim)
RUN git clone https://github.com/flutter/flutter.git /flutter
ENV PATH="/flutter/bin:/flutter/bin/cache/dart-sdk/bin:/usr/local/bin:$PATH"

WORKDIR /workspace

CMD ["bash"]
