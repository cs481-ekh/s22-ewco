---
title: Initial Sponsor Meeting
date: 2022-01-24 09:00:00 -0500
author:
  name: Mateo Ortegon
  link: https://teoo.io
categories: [Logs, Sponsor Meeting]
tags: [meeting, sponsor]     # TAG names should always be lowercase
toc: true
math: false
mermaid: false
---
# Questions for Sponsor Meeting

## We present:
: Our understanding of the problem from reading the PDF shared
- Demo OnLogic streaming Kiosk mode on https://localhost:8443 over SSH
## Getting context:
Walk through project requirements and starter code (if applicable)
- At a high level, what is the expectation of the finished product?
- What is the starting point (existing code)?
- Technologies chosen (why?):
  - PostgreSQL
    - Flexibility with technologies (do we need a full Postgres db or can we use a lighter weight option like Redis)
  - Warp Web server (vs Nginx)
- Tech considered?
  - Containerized micro services
    - FreeBSD jails
- What do the APIs do?
- Any initial thoughts / ideas or known areas of bloat we can look into?
## Feature Prioritization:
- Views
  - System diagnostics
  - System maintenance
  - Data/operations
## Security:
- Should web UI be accessible from network.
  - Over HTTP/HTTPS and/or stream SSH?
  - Do changes on one client need to be reflected on all other clients
- Are APIs exposed?
  - API auth?
- Updates over USB would require privilege escalation
  - Users/login:
    - LDAP/AD? Or root account?
## Set-Up Tips:
- FreeBSD
  - amd64 vs i386?
## Dev process + CI/CD
- Our tentative approach:
  - Various FreeBSD VMs exposed SSH
  - GitHub Actions build code
  - Deploy to unconstrained FreeBSD VM
## Communication
- How often to check in?
- email, zoom, slack etc.?
- Do you want access to the test env VMs?
