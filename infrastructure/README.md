# Infrastructure - WAssistant

This folder contains Infrastructure as Code (IaC) for deploying WAssistant.

## Files

- `main.tf` - Terraform configuration for GCP
- See `../deploy/` for deployment scripts and configs

## Quick Start

```bash
# Initialize Terraform
terraform init

# Preview changes
terraform plan -var="project_id=YOUR_PROJECT_ID"

# Apply infrastructure
terraform apply -var="project_id=YOUR_PROJECT_ID"
```

## Resources Created

| Resource       | Purpose             |
| -------------- | ------------------- |
| Cloud Run      | API hosting         |
| Cloud SQL      | PostgreSQL database |
| Secret Manager | Secure credentials  |
| Cloud Storage  | Asset storage       |

## Environments

- `dev` - Development (minimal resources)
- `staging` - Pre-production testing
- `prod` - Production (HA, backups enabled)
