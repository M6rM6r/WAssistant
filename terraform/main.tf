terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

provider "digitalocean" {
  token = var.do_token
}

# INTJ Strategy: Managed Database for Zero Maintenance
resource "digitalocean_database_cluster" "postgres" {
  name       = "wassistant-db"
  engine     = "pg"
  version    = "15"
  size       = "db-s-1vcpu-1gb"
  region     = "nyc3"
  node_count = 1
}

# OCPD: Automated Scaling for the Backend
resource "digitalocean_app" "wassistant-backend" {
  spec {
    name   = "wassistant-api"
    region = "nyc3"

    service {
      name               = "api"
      instance_count     = 1
      instance_size_slug = "basic-xxs"
      docker_build_file  = "Dockerfile"

      env {
        key   = "DATABASE_URL"
        value = digitalocean_database_cluster.postgres.uri
      }
    }
  }
}

variable "do_token" {
  description = "DigitalOcean API Token"
  type        = string
  sensitive   = true
}
