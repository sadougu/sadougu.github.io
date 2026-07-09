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

  assert(!/wise\.com|futustatic|tigerbbs|trustbank\.sg|growbeansprout|sitecorecontenthub/i.test(html),
    'homepage post cards must not hotlink external cover images');

  const thumbs = html.match(/<img class="paper-thumb__img"[^>]*>/g) || [];
  assert(thumbs.length >= 1, 'homepage must render post-card thumbnails');

  assert(/loading="eager"/.test(thumbs[0]),
    'first post-card thumbnail must load eagerly');
  assert(/fetchpriority="high"/.test(thumbs[0]),
    'first post-card thumbnail must use fetchpriority=high');
  assert(/\/images\/covers\//.test(thumbs[0]),
    'first post-card thumbnail must use a local optimized cover');

  // Only the LCP candidate should be eager; remaining cards stay lazy.
  const eagerCount = thumbs.filter((t) => /loading="eager"/.test(t)).length;
  assert(eagerCount === 1, 'only one post-card thumbnail should load eagerly (got ' + eagerCount + ')');
  if (thumbs.length > 1) {
    assert(/loading="lazy"/.test(thumbs[1]),
      'second post-card thumbnail must load lazily');
  }

  const preloadMatch = html.match(/rel="preload"[^>]+as="image"[^>]+href="([^"]+)"[^>]*>/i)
    || html.match(/rel="preload"[^>]+href="([^"]+)"[^>]+as="image"[^>]*>/i);
  assert(preloadMatch, 'homepage must preload the LCP cover image');
  assert(/\/images\/covers\//.test(preloadMatch[1]),
    'homepage LCP preload must point at a local optimized cover');

  // Preload target should match the first card image.
  const firstSrc = (thumbs[0].match(/src="([^"]+)"/) || [])[1];
  assert(firstSrc && preloadMatch[1] === firstSrc,
    'LCP preload href must match the first post-card image src');

  assert(/<link rel="stylesheet" href="\/css\/style\.css">/.test(html),
    'homepage must use a blocking stylesheet');

  const cssPath = path.join(repoRoot, 'public', 'css', 'style.css');
  assert(fs.existsSync(cssPath), 'built stylesheet must exist');
  const css = fs.readFileSync(cssPath, 'utf8');
  assert(/\.page-grain\s*\{[^}]*display:\s*none/.test(css),
    'mobile CSS must hide page-grain overlay');
  assert(/\.site-header[^}]*filter:\s*none\s*!important/.test(css),
    'mobile CSS must disable expensive paper-edge filters on header');

  // Local cover assets should be small enough for mobile Performance ≥ 90.
  const coversDir = path.join(repoRoot, 'public', 'images', 'covers');
  assert(fs.existsSync(coversDir), 'built local covers directory must exist');
  const coverFiles = fs.readdirSync(coversDir).filter((f) => f.endsWith('.webp'));
  assert(coverFiles.length >= 5, 'expected optimized local covers to be published');
  for (const file of coverFiles) {
    const size = fs.statSync(path.join(coversDir, file)).size;
    assert(size > 0 && size <= 40 * 1024,
      file + ' should be ≤ 40KB for mobile LCP budget (got ' + size + ' bytes)');
  }

  console.log('OK: homepage performance artifacts verified');
  console.log('  thumbs:', thumbs.length, '| covers:', coverFiles.length,
    '| LCP:', firstSrc);
}

main();
