# 新加坡省钱速报

> 在新加坡，把钱省明白。

个人博客，专注新加坡本地省钱资讯、会员权益、消费返现与生活攻略。使用 [Hexo](https://hexo.io/) + [FlatPaper](https://github.com/Homulilly/hexo-theme-flatpaper) 主题搭建，通过 GitHub Pages 自动发布。

**在线访问**：[https://sadougu.github.io](https://sadougu.github.io)

## 内容概览

| 分类 | 说明 |
| --- | --- |
| **life** | 新加坡生活省钱攻略：会员权益、信用卡、投资理财等 |

### 已发布文章

| 日期 | 标题 | 分类 |
| --- | --- | --- |
| 2026-07-15 | [LifeSG Child Credits 指南：S$500 儿童补贴怎么打进 ShopeePay](https://sadougu.github.io/2026/07/15/LifeSG-Child-Credits-ShopeePay指南：500新币怎么打进ShopeePay/) | life |
| 2026-07-12 | [Citi 新加坡信用卡评测：Cash Back、SMRT 与最值得办的几张卡](https://sadougu.github.io/2026/07/12/Citi新加坡信用卡评测：Cash-Back、SMRT与最值得办的几张卡/) | life |
| 2026-07-04 | [Wise 评测：多币种账户 + Interest 收益，新加坡华人怎么用最划算](https://sadougu.github.io/2026/07/04/Wise评测：多币种账户与Interest收益账户推荐/) | life |
| 2026-06-29 | [SingSaver vs MoneySmart：新加坡信用卡比价网站怎么选？](https://sadougu.github.io/2026/06/29/SingSaver-vs-MoneySmart：新加坡信用卡比价网站怎么选/) | life |
| 2026-06-28 | [Moomoo 评测：富途牛牛在新加坡，我为什么推荐它](https://sadougu.github.io/2026/06/28/Moomoo评测：富途牛牛新加坡投资平台推荐/) | life |
| 2026-06-26 | [Tiger Trade 评测：一个账户投资全球，我为什么推荐老虎证券](https://sadougu.github.io/2026/06/26/Tiger-Trade评测：一个账户投资全球，我为什么推荐老虎证券/) | life |
| 2026-06-25 | [Trust Card 评测：新加坡最省心的信用卡，我为什么推荐它](https://sadougu.github.io/2026/06/25/Trust-Card评测：新加坡最省心的信用卡推荐/) | life |
| 2026-06-24 | [Endowus 评测：在新加坡用 CPF、SRS 和现金低成本投资](https://sadougu.github.io/2026/06/24/Endowus评测：新加坡低成本投资CPF与SRS/) | life |
| 2026-06-23 | [新加坡 NTUC 工会会员：一年 $117，到底值不值？](https://sadougu.github.io/2026/06/23/新加坡NTUC工会会员值不值得办/) | life |

## 技术栈

- **框架**：[Hexo](https://hexo.io/) 8.x
- **主题**：[FlatPaper](https://github.com/Homulilly/hexo-theme-flatpaper)（当前版本：2026-06-28）
- **部署**：GitHub Actions → GitHub Pages
- **语言**：简体中文（`zh-CN`）

## 用 Grok 一键发帖到 GitHub Pages

本站的文章主要由 [Grok](https://x.ai/) 在 [Cursor](https://cursor.com/) 里撰写并自动推送。你不需要手动敲每一行，只要描述清楚需求，Grok 会完成调研、写稿、构建验证和 Git 推送。

### 前置条件

1. Fork 或 clone 本仓库到本地
2. 安装 Node.js 18+ 和 Git
3. 在 Cursor 中打开项目，启用 Grok Agent
4. 配置 Git 远程仓库写权限（SSH 或 HTTPS + token）
5. GitHub 仓库 **Settings → Pages → Source** 设为 **GitHub Actions**

### 一键发帖流程

在 Cursor 里对 Grok 说一句话即可，例如：

```
写一篇介绍 XXX 的文章，发布到 GitHub Pages
```

Grok 会自动执行以下步骤：

| 步骤 | Grok 做什么 |
| --- | --- |
| 1. 调研 | 查阅官方资料和相关评测，独立撰写中文文章 |
| 2. 写稿 | 在 `source/_posts/` 创建 Markdown，含 front matter（title、date、tags、categories） |
| 3. 构建 | 运行 `npm run build` 验证 Hexo 生成无报错 |
| 4. 提交 | `git add` → `git commit` → `git push origin main` |
| 5. 部署 | GitHub Actions 自动构建并发布到 https://sadougu.github.io |

### 你可以这样提需求

```
发一篇新帖子推荐 XXX，附上我的邀请码/链接，洗稿不要照抄，语气适合中文读者
```

```
根据迄今为止的内容更新 README，并发布到 GitHub
```

### 文章格式参考

```markdown
---
title: 文章标题
date: 2026-07-15 10:00:00
tags:
  - 标签1
  - 新加坡
categories:
  - life
cover: /images/covers/example.webp
---

摘要段落，显示在首页。

<!-- more -->

正文从这里开始……
```

首页文章卡片会优先使用 front-matter 里的 **本地封面**（推荐放在 `source/images/covers/`，WebP、约 640×360、尽量小于 40KB）。外链封面在主页会被主题替换为本地回退图，以免拖慢移动端 Lighthouse。

### 注意事项

- `public/` 目录已 gitignore，**不要手动提交**，由 GitHub Actions 构建生成
- 站点主题配置在 `_config.flatpaper.yml`，Hexo 配置在 `_config.yml`
- 本地封面放在 `source/images/covers/`，会随站点一起发布
- 推送 `main` 后约 1–2 分钟生效
- 如果 push 被拒（邮箱隐私限制），需将 git `user.email` 改为 `用户名@users.noreply.github.com`
- 性能自检：`npm run test:performance`

### 手动发帖（不用 Grok 时）

```bash
npx hexo new "文章标题"
# 编辑 source/_posts/文章标题.md
npm run build          # 本地验证
git add source/_posts/
git commit -m "Add post: 文章标题"
git push
```

## 本地开发

```bash
npm install
npm run server
```

浏览器打开 http://localhost:4000 预览。修改内容后刷新即可，无需重启服务。

## 构建

```bash
npm run build
```

生成的静态文件输出到 `public/` 目录（已加入 `.gitignore`，不提交到仓库）。

## 项目结构

```
├── source/
│   ├── _posts/            # 博客文章
│   ├── images/covers/     # 文章题图（本地 WebP，供首页卡片使用）
│   ├── about/             # 关于页面
│   ├── categories/        # 分类页
│   └── tags/              # 标签页
├── themes/flatpaper/      # FlatPaper 主题
├── test/                  # 首页性能结构校验等
├── _config.yml            # Hexo 站点配置
├── _config.flatpaper.yml  # 主题个性化配置
├── .github/workflows/     # GitHub Actions 部署流程
└── package.json
```

## 部署说明

推送 `main` 分支会触发 `.github/workflows/pages.yml` 工作流，自动构建并发布到 GitHub Pages。

首次部署前，需在仓库 **Settings → Pages → Build and deployment** 中将 Source 设为 **GitHub Actions**。

## 链接

- 站点：[sadougu.github.io](https://sadougu.github.io)
- GitHub：[sadougu](https://github.com/sadougu)
- 主题：[hexo-theme-flatpaper](https://github.com/Homulilly/hexo-theme-flatpaper)

## License

MIT