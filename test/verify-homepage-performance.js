#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const repoRoot = path.resolve(__dirname, '..');
const indexPath = path.join(repoRoot, 'public', 'index.html');

function fail(message) {
  console.error('FAIL:', message);
  process.exit(1);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function buildSite() {
  const result = spawnSync('npm', ['run', 'build'], {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: 'pipe',
  });
  if (result.status !== 0) {
    fail('npm run build failed:\n' + (result.stderr || result.stdout));
  }
}

function readHomepage() {
  if (!fs.existsSync(indexPath)) {
    buildSite();
  }
  return fs.readFileSync(indexPath, 'utf8');
}

function main() {
  const html = readHomepage();

  assert(!/<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js/i.test(html),
    'gtag must not load synchronously in <head>');

  assert(/loadGtag|first user interaction|scroll.*click.*touchstart/i.test(html),
    'gtag should be deferred to user interaction');

  assert(/loadMain/.test(html),
    'main.js should be loaded via idle/defer loader');

  assert(!/wise\.com/i.test(html),
    'homepage post cards must not hotlink external cover images');

  const firstThumb = html.match(/<img class="paper-thumb__img"[^>]*>/);
  assert(firstThumb, 'homepage must render a post-card thumbnail');
  assert(/loading="eager"/.test(firstThumb[0]),
    'first post-card thumbnail must load eagerly');
  assert(/fetchpriority="high"/.test(firstThumb[0]),
    'first post-card thumbnail must use fetchpriority=high');

  assert(/rel="preload"[^>]+as="image"[^>]+camera\.webp/i.test(html),
    'homepage must preload the first local cover image');

  assert(/<link rel="stylesheet" href="\/css\/style\.css">/.test(html),
    'homepage must use a blocking stylesheet');

  const cssPath = path.join(repoRoot, 'public', 'css', 'style.css');
  assert(fs.existsSync(cssPath), 'built stylesheet must exist');
  const css = fs.readFileSync(cssPath, 'utf8');
  assert(/\.page-grain\s*\{[^}]*display:\s*none/.test(css),
    'mobile CSS must hide page-grain overlay');
  assert(/\.site-header[^}]*filter:\s*none\s*!important/.test(css),
    'mobile CSS must disable expensive paper-edge filters on header');

  console.log('OK: homepage performance artifacts verified');
}

main();