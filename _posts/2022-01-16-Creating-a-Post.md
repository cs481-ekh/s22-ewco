---
title: Creating a Post
date: 2022-01-16 09:00:00 -0500
author:
name: Mateo Ortegon
link: https://teoo.io
categories: [Meeting Logs, Minutes]
tags: [meeting, minutes]     # TAG names should always be lowercase
toc: true
math: true
mermaid: true
---
This post will guide you how to write a post on _Chirpy_ theme. Even if you have previous experience with Jekyll, this article is worth reading, because many features require specific variables to be set.

## Naming and Path

Create a new file named `YYYY-MM-DD-TITLE.EXTENSION` and put it in the `_posts` of the root directory. Please note that the `EXTENSION` must be one of `md` and `markdown`. If you want to save time of creating files, please consider using the plugin [`Jekyll-Compose`](https://github.com/jekyll/jekyll-compose) to accomplish this.

## Front Matter

Basically, you need to fill the [Front Matter](https://jekyllrb.com/docs/front-matter/) as below at the top of the post:

```yaml
---
title: TITLE
date: YYYY-MM-DD HH:MM:SS +/-TTTT
categories: [TOP_CATEGORIE, SUB_CATEGORIE]
tags: [TAG]     # TAG names should always be lowercase
---
```

> **Note**: The posts' _layout_ has been set to `post` by default, so there is no need to add the variable _layout_ in the Front Matter block.

### Timezone of Date

In order to accurately record the release date of a post, you should not only set up the `timezone` of _\_config.yml_ but also provide the post's timezone in variable `date` of its Front Matter block. Format: `+/-TTTT`, e.g. `+0800`.

### Categories and Tags
