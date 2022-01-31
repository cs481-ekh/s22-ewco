# 🦾 Dexter's Lab
[![Automatic build](https://github.com/cs481-ekh/S22-ewco/actions/workflows/pages-deploy.yml/badge.svg)](https://github.com/cs481-ekh/ewco/actions/workflows/pages-deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## 📚 Documentation
Visit the [documentation website](https://cs481-ekh.github.io/s22-ewco/) for:
- Problem statement and relevant docs
- Meeting minutes
- Research findings
- Product usage

## 📜 Creating a Website Post
All website posts are written in Markdown and placed under the ```_posts``` directory.

### File Name
All posts must follow the ```YYYY-MM-DD-TITLE.EXTENSION``` format, for example ```2022-01-20-Title.md```.
### Header
Include the following header at the top of the ```.md``` file:
```yaml
---
title: Markdown Supported
date: 2022-01-17 09:00:00 -0500
author:
  name: Fulle Name
  link: https://personal.site
categories: [Category, Sub-Category]
tags: [tag1, tag2]     # TAG names should always be lowercase
toc: true   # enable/disable Table of Contents on post
math: false  # enable/disable latec rendering
mermaid: false  # enable/disable mermaid graph rendering
---
```
> **Note:** If the date specified on the header has not passed yet, the post will not be rendered and therefore won't show up on the deployed website. 


### Content
For a demo of markdown supported [view this post](https://cs481-ekh.github.io/s22-ewco/posts/Markdown-Supported/) - the source is [found here](https://github.com/cs481-ekh/s22-ewco/blob/main/_posts/2022-01-17-Markdown-Supported.md?plain=1).


