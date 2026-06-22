# sadougu.github.io

Personal site powered by [Hexo](https://github.com/hexojs/hexo), deployed to GitHub Pages.

## Development

```bash
npm install
npm run server
```

Open http://localhost:4000 to preview locally.

## Build

```bash
npm run build
```

Generated files are written to `public/` (gitignored).

## Deploy

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/pages.yml`, which builds the site and publishes to GitHub Pages.

Before the first deploy, enable **Settings → Pages → Build and deployment → Source: GitHub Actions** in the repository settings.

## Writing

```bash
npx hexo new "Post Title"
npx hexo new page about
```

Posts live in `source/_posts/`. Pages live in `source/<page-name>/index.md`.