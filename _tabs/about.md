---
title: About
icon: fas fa-robot
order: 4
---

## Embedded Web Controller Optimization
### Team Members
- Daniel Vega-Myhre
- Devyn Roth
- Mateo Ortegon


## Project abstract
GoWest Robotics develops modern HMIs (human-machine interfaces). These HMIs are used by non-technical workers on a
factory floor to interact with factory hardware; often in air-gapped environments (no internet).

Historically, HMI’s are part of a complicated network of expensive hardware (workstations, servers, PLCs and industrial
machines). To minimize cost for clients, GoWest Robotics needs a system that can run on simple cost effective computers
without sacrificing any critical functionality or UX; this project is designed to address that need.

> View full project background [here](https://cs481-ekh.github.io/s22-ewco/posts/HMI-Kiosk-Problem-Statement/).

## Project Description
The OnLogic CL200g-11 boots up and launches Firefox in kiosk mode, where the user is then served with the web
application hosted within the device. The Vue.js based WebUI has a modern feel, allows basic CRUD operations on the
local database, and presents a system stats dashboard. The Rust Application consists of the Warp server and Diesel ORM
which communicates with the Postgres DB that contains the task list for the robot. The CRUD operations allow the user
to create/view/remove “tasks” that machines perform.

![Tasks Table](/assets/img/tasks.png)
*The `Tasks` table displaying loaded tasks and their state*

![Stats Page](/assets/img/stats.png)
*The `Stats` tab/graphs displaying system stats (memory and CPU usage)*
