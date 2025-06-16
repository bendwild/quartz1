---
title: Favicon
tags:
  - plugin/emitter
created: 2025-06-12T15:07
modified: 2025-06-16T08:59
---

This plugin emits a `favicon.ico` into the `public` folder. It creates the favicon from `icon.png` located in the `quartz/static` folder.
The plugin resizes `icon.png` to 48x48px to make it as small as possible.

> [!note]
> For information on how to add, remove or configure plugins, see the [[Configuration#Plugins|Configuration]] page.

This plugin has no configuration options.

## API

- Category: Emitter
- Function name: `Plugin.Favicon()`.
- Source: [`quartz/plugins/emitters/favicon.ts`](https://github.com/jackyzha0/quartz/blob/v4/quartz/plugins/emitters/favicon.ts).
