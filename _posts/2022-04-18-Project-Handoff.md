---
title: Project Handoff
date: 2022-04-18 09:00:00 -0500
author:
  name: Mateo Ortegon
  link: https://teoo.io
categories: [Documentation, Handoff]
tags: [project, handoff]
toc: true
math: true
mermaid: true
---

## Status


The basic desired functionality of the project is all up and running, the CRUD operations all work properly and the
system logs are all stored on a centralized log file on the device. However there are stretch goals that we were unable to accomplish for the project sponsor, such as:


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

## Future Project Idea

[Example video](https://www.youtube.com/watch?v=D9ZbqnffS7c)

Write a game to run on the Nintendo NES, and compile it into a ROM so it can be loaded onto a console or emulator.

This can be done with JavaScript and some frameworks (explained in the video above), with plain ole’ 6502 assembly
or likely many other technologies. There are fun inherent constraints in writing for an 8 bit severely resource
constrained system (see video above). Going the JS route, the frameworks of interest are “nesly-assembler” (abstract
syntax tree to translate JS into 6502 assembly) and nesly-sound (not 100% sure what this does, but it helps create
sounds that fit the constraints of the NES APU).

The game ROM can be tested using JSNES - a Javascript-based Nintendo ES emulator that can be deployed in a docker
container. The video above explains the dev process enough to give a sense of direction, but not so much that the
project is ‘easy’ - there is still a lot of research and learning to be done.
