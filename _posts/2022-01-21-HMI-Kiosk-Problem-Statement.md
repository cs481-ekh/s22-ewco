---
title: FreeBSD Industrial HMI Kiosk
date: 2022-01-21 00:01:00 -0500
author:
  name: Mateo Ortegon
  link: https://teoo.io
categories: [GoWest Robotics, Documents]
tags: [documents, problem, statement]     # TAG names should always be lowercase
toc: true # enable/disable Table of Contents on post
math: false
mermaid: false
---
# Background
## Go West Robotics
Go West Robotics is a Boise-based robotics software company. The company writes software for a
variety of robotics applications, spanning from Industrial Automation (Manufacturing / Warehouse
automation) to Autonomous Mobile Robots (Self Driving Vehicles, Logistics, Construction, etc.). Go West
specializes in the application of modern/mainstream software development to robotics applications,
using widely used open source platforms such as Linux, Python, C/C++, NodeJs and Rust. Applications
vary from algorithm development and sensor fusion to robot motion planning and robotic hardware
integration.
## Industrial PCs
Fanless Industrial PCs are x64 compatible hardware in an industrial grade enclosure and form
factor. They are basically small and indestructible PCs with some industry specific IO. These
can run Linux much the same as a regular laptop, although specs are often on the low end to
keep them affordable, with a price range between $200 - $1000. For this project we aim for
the lower end of that spectrum, to end up with a system that is capable on all platforms. The
reference hardware for this project is the OnLogic CL200g-11, which has an Intel Celeron
N3350 and 1GB of RAM
## HMI Kiosk
Most Industrial Automation lines will need user interaction on the factory floor. Traditionally these are
clunky interfaces built into some proprietary device (PLCs). Because we write our logic for our
installations on Linux platforms, it makes much more sense to use modern web or mobile technologies
to create fast, beautiful and highly usable user interfaces. These are not cloud connected, and run
stand-alone on a closed local network. They need to be simple to install (few components and
dependencies) and be quickly debuggable on site. At the same time, these systems need to be secure:
factory personnel should not be able to get out of the web interface or have access to any part of the
backend system.
## FreeBSD
FreeBSD is a secure lightweight OS. The BSD kernel is a fork from the traditional Linux kernel
and very carefully managed in terms of security and bloat. Small size and security make it a
good choice for a kiosk HMI. Unlike OpenBSD or roll-your own Yocto Linux builds, FreeBSD releases are full featured enough to run modern languages like Rust and a browser like Firefox,
while having well-tested and understood releases with a community to help with challenges.
## Rust
Rust is a fast and safe compiled language resulting in a single binary application without
dependencies. These are all essential for the kiosk:
- **Fast:** the kiosk runs on a low resource platform. CPU and memory resources must be
  used wisely
  - **Safe:** Unlike C or C++, memory corruption is practically impossible with Rust, making
    hard to find bugs in production much less likely.
  - **Compiled:** The Rust compiler is pedantic and makes it hard to have simple mistakes
    make it through the compilation process. Compared to interpreted languages like Python
    and NodeJs, this greatly reduces the opportunity for runtime errors
  - **Single Binary:** Deployment without internet can be cumbersome especially for
    languages with complex package management such as Python and NodeJs. Rust
    binaries are fully self-contained and run without the need to install additional runtime
    libraries, making deployment simple and providing ease of versioning.

# Project Description
## Problem Statement
Go West Robotics deploys HMIs to industrial environments for a number of clients. To keep the cost
down, we need to be able to use fairly simple hardware, while still offering state of the art UIs.
Oftentimes, these systems are air gapped from the internet, and so installations must be fast and simple.
Upgrades may happen over USB or SSH from a directly connected laptop, again without internet; there
can be no reliance on package or source code repositories.
The HMIs serve a backend system that may run on the same hardware. This brings the requirement for a
(relational) database and a webserver process to serve the frontend. Our preference for the frontend is
Vue.js, but other options can be explored, especially if performance is improved without compromising
quality.
Using a full desktop Linux such as Ubuntu or Manjaro brings in more than the small hardware footprint
can handle. Using backend languages like Node and Python cause upgrade and versioning nightmares,
while posing an IP security problem when code is in plaintext on the device.

## Desired Solution
Go West would like to have a proof of concept for a lightweight OS and webserver running on small
footprint hardware; a Celeron CPU with 1GB RAM. This should be enough to run a FireFox browser in
kiosk mode, without installing a desktop environment. For the OS we would like to use FreeBSD (latest
BSU CS Senior Project Proposal - Go West Robotics - 1/19/2022
stable) and a frontend written in Vue.js. The backend webserver runs on the same machine and is
written in Rust; we recommend ‘Warp’. It should communicate with a PostgreSQL Database using the
Diesel library.

### Resources:
- **Rust Diesel:**
  - https://diesel.rs/guides/getting-started
- **Warp web server framework:**
  - https://github.com/seanmonstar/warp
- **FireFox Kiosk Mode:**
  - https://support.mozilla.org/en-US/kb/firefox-enterprise-kiosk-mode
- **Running FireFox without a desktop:**
  - https://linuxconfig.org/how-to-run-x-applications-without-a-desktop-or-a-wm

## Frontend requirements
  The frontend requirements are simple for this proof of concept, but must display the capabilities of the
  full system. There will be 3 views:
- **System diagnostics**
  - Disk capacity
  - Cpu usage
  - Last reboot, boot time.
  - IP address
  - Etc. interesting system stats


- **System Maintenance**
  This is the screen used for system maintenance:
  - **Upgrades.** Allow upload of an update file from a USB stick to update the Rust and Vue
    code
  - **Reboot.** A button to reboot the system. It should come back up in the application. It
    would be great if it could record the time it took from pressing this button to being fully
    rebooted, store that in the db for display in the diagnostics screen. Shoot for < 10s
  - **Reset database.** A button to remove all user data from the database, essentially a
    factory reset.


- **Data and operations**
  This varies from application to application so this can be something creative. The requirements
  are simply to be showing values read from the database, and some mechanism to change and
  add those values. A suggestion is some ability to schedule a ‘task’, have the system update and
  display its progress and display the list of completed tasks. Anything else that reads/writes the
  database is acceptable.

Because we want to demonstrate the performance of the UI on this platform, it is advisable to use some
more complex elements; animation in the form of donut charts or a sliding navigation panel. There is
however no need for things like video playback or webgl.


## Installation and upgrade requirements
The initial provisioning of the system can be manual, meaning that all components are installed with a
network connection step by step, not via an installer script or other automated mechanism. Once
provisioned though, the system should be upgradable via its own interface (see the System Maintenance
page above). This process should be done by an untrained user, someone with no familiarity with Linux
or programming, and may not know what a file-path is. There should be a documented method of
creating a USB stick (by technical personnel) that can be provided to the user. The user should be able
to insert this USB stick, press the upgrade button on the maintenance screen and somehow end up with
an upgraded system. The version number should be visible on all screens.


For this project, the upgrade does not have to handle database migrations (additions or modifications to
the PostgreSQL db), but it should be able to update the Vue.js code as well as the Rust code. As a
stretch goal, the system should be robust to old or garbage update files or even maliciously crafted
ones.
