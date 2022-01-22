---
title: FreeBSD Research
date: 2022-01-21 00:00:00 -0500
author:
  name: Mateo Ortegon
  link: https://teoo.io
categories: [Research, OS]
tags: [freebsd, os]     # TAG names should always be lowercase
toc: true # enable/disable Table of Contents on post
math: false
mermaid: false
---
As outlined in the "HMI Kiosk Problem Statement" post, a major constraint for our embedded web controller will be
the memory footprint. The hardware our product will run on is an x86 processor with 1GB RAM.

# Architecture
From some preliminary research, i386 FreeBSD images have a smaller memory footprint than amd64 (aprox 64MB RAM). Since our test
environment runs a 64bit Intel chip, we flashed the amd64 image, but it is worthwhile exploring the possibility
of using the i386 image given the ~100MB potential footprint reduction.

The memory consumption on a bare-bones installation of FreeBSD on the OnLogic computer is as follows:
```shell
usr@fbsd-onlogic:~ $ dmesg | grep memory
real memory  = 1073741824 (1024 MB)
avail memory = 821465088 (783 MB)
```


# Containerization
Containerization technologies would allow us to deploy each component of the HMI as a microservice - which addresses some of the design
requirements particularly around security and ease of update.

We are exploring the following containerization technologies:
## K3s
### Pros
### Cons

## FreeBSD Jails
### Pros
- Native to FreeBSD
### Cons

##
