---
title: RemoveDrafts
tags:
  - plugin/filter
created: 2025-06-12T15:07
modified: 2025-06-16T08:59
---

This plugin filters out content from your vault, so that only finalized content is made available. This prevents [[private pages]] from being published. By default, it filters out all pages with `draft: true` in the frontmatter and leaves all other pages intact.

> [!note]
> For information on how to add, remove or configure plugins, see the [[Configuration#Plugins|Configuration]] page.

This plugin has no configuration options.

## API

- Category: Filter
- Function name: `Plugin.RemoveDrafts()`.
- Source: [`quartz/plugins/filters/draft.ts`](https://github.com/jackyzha0/quartz/blob/v4/quartz/plugins/filters/draft.ts).
