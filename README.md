# 新加坡省钱速报

> 在新加坡，把钱省明白。

个人博客，专注新加坡本地省钱资讯、会员权益、消费返现与生活攻略。使用 [Hexo](https://hexo.io/) + [FlatPaper](https://github.com/Homulilly/hexo-theme-flatpaper) 主题搭建，通过 GitHub Pages 自动发布。

**在线访问**：[https://sadougu.github.io](https://sadougu.github.io)

## 内容概览

| 分类 | 说明 |
| --- | --- |
| **life** | 新加坡生活省钱攻略：会员权益、信用卡、投资理财等 |
| **tech** | 工具导航与站点维护指南 |

### 已发布文章

| 日期 | 标题 | 分类 |
| --- | --- | --- |
| 2026-06-25 | [Trust Card 评测：新加坡最省心的信用卡推荐](https://sadougu.github.io/2026/06/25/Trust-Card评测：新加坡最省心的信用卡推荐/) | life |
| 2026-06-24 | [Endowus 评测：在新加坡用 CPF、SRS 和现金低成本投资](https://sadougu.github.io/2026/06/24/Endowus评测：新加坡低成本投资CPF与SRS/) | life |
| 2026-06-23 | [新加坡 NTUC 工会会员：一年 $117，到底值不值？](https://sadougu.github.io/2026/06/23/新加坡NTUC工会会员值不值得办/) | life |
| 2026-06-22 | [常用 AI 平台与工具快捷导航](https://sadougu.github.io/2026/06/22/常用-AI-平台与工具快捷导航/) | tech |
| 2026-06-22 | [如何在 Hexo 中发表新文章](https://sadougu.github.io/2026/06/21/如何在-Hexo-中发表新文章/) | tech |

## 技术栈

- **框架**：[Hexo](https://hexo.io/) 8.x
- **主题**：[FlatPaper](https://github.com/Homulilly/hexo-theme-flatpaper)
- **部署**：GitHub Actions → GitHub Pages
- **语言**：简体中文（`zh-CN`）

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

## 发布新文章

```bash
npx hexo new "文章标题"
```

编辑 `source/_posts/` 下生成的 Markdown 文件，然后提交并推送：

```bash
git add source/_posts/
git commit -m "Add post: 文章标题"
git push
```

推送到 `main` 分支后，GitHub Actions 会自动执行 `npm run build` 并部署到 GitHub Pages，通常一两分钟内生效。

### 文章 URL 规则

当前 permalink 配置为 `:year/:month/:day/:title/`，例如：

```
https://sadougu.github.io/2026/06/25/Trust-Card评测：新加坡最省心的信用卡推荐/
```

## 项目结构

```
├── source/
│   ├── _posts/          # 博客文章
│   └── about/           # 关于页面
├── themes/flatpaper/    # FlatPaper 主题
├── _config.yml          # Hexo 站点配置
├── _config.flatpaper.yml
├── .github/workflows/   # GitHub Actions 部署流程
└── package.json
```

## 部署说明

推送 `main` 分支会触发 `.github/workflows/pages.yml` 工作流，自动构建并发布到 GitHub Pages。

首次部署前，需在仓库 **Settings → Pages → Build and deployment** 中将 Source 设为 **GitHub Actions**。

## 链接

- 站点：[sadougu.github.io](https://sadougu.github.io)
- GitHub：[sadougu](https://github.com/sadougu)