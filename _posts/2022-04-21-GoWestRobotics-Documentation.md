---
title: GWR Documentation Deliverables
date: 2022-04-21 09:00:00 -0500
author:
  name: EWCO
categories: [GoWest Robotics, Documents]
tags: [gwr, documentation]
toc: true
math: true
mermaid: true
---
## Status
The basic desired functionality of the project is all up and running, the CRUD operations all work properly and the
system logs are all stored on a centralized log file on the device. However, there are stretch goals that we were unable to accomplish for the project sponsor, such as:


We were unable to figure out how to go about updating the software via USB, there is no plan in place to accomplish that
functionality.
Separate page in the UI for displaying and searching the system logs to allow the user to view them.

## Instructions
The instructions for running the application are found at the links below:
- [Deploying on Ubuntu](https://cs481-ekh.github.io/s22-ewco/posts/Ubuntu-Set-up/)
- [Deploying on FreeBSD](https://cs481-ekh.github.io/s22-ewco/posts/FreeBSD-Set-up/)

## Thoughts
Some potential ideas for extending this project in future semesters:
- Enable robot tasks in database to actually be sent via socket to industrial machines
- Set up monitoring, alerting for industrial robots status
- Make web controller updatable via USB drive
- Separate page in UI for displaying/searching logs



