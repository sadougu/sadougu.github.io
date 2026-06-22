---
title: 如何在 Hexo 中发表新文章
date: 2026-06-22 06:10:02
tags:
  - hexo
  - guide
categories:
  - tech
---

这篇指南介绍如何在这个基于 [Hexo](https://hexo.io/) 和 [FlatPaper](https://github.com/Homulilly/hexo-theme-flatpaper) 主题搭建的个人站点上发表一篇新的 blog post。

<!-- more -->

## 1. 创建文章

在项目根目录运行：

```bash
npx hexo new "文章标题"
```

例如：

```bash
npx hexo new "我的第一篇技术笔记"
```

Hexo 会在 `source/_posts/` 下生成一个 Markdown 文件，文件名大致类似：

`source/_posts/我的第一篇技术笔记.md`

## 2. 编辑文章内容

打开刚生成的文件，结构如下：

```markdown
---
title: 我的第一篇技术笔记
date: 2026-06-22 12:00:00
tags:
  - hexo
  - blog
categories:
  - tech
---

这里是正文，支持 **Markdown**。

## 小标题

- 列表项
- 另一项

[链接示例](https://github.com/sadougu)
```

常用 front matter 字段：

| 字段 | 作用 |
|------|------|
| `title` | 文章标题 |
| `date` | 发布时间 |
| `tags` | 标签 |
| `categories` | 分类 |
| `cover` | 封面图，如 `/images/cover.jpg` |

如果希望首页只显示摘要，可以用 `<!-- more -->` 分隔：

```markdown
这是摘要部分。

<!-- more -->

这是正文剩余部分。
```

## 3. 本地预览（可选）

```bash
npm run server
```

浏览器打开 http://localhost:4000 查看效果。修改内容后刷新页面即可，不需要重启服务。

## 4. 发布到线上

本站通过 GitHub Actions 自动部署，发布流程就是提交并推送：

```bash
git add source/_posts/
git commit -m "Add post: 我的第一篇技术笔记"
git push
```

推送到 `main` 分支后，GitHub Actions 会自动执行 `npm run build` 并更新 https://sadougu.github.io。通常一两分钟内生效。

## 5. 文章 URL 规则

当前 permalink 配置为：

`:year/:month/:day/:title/`

因此一篇 2026-06-22 发布的文章，地址会类似：

`https://sadougu.github.io/2026/06/22/我的第一篇技术笔记/`

## 最短流程

```bash
npx hexo new "新文章标题"
# 编辑 source/_posts/新文章标题.md
git add .
git commit -m "Add new post"
git push
```

按以上步骤，就可以在这个框架下持续发表新文章了。