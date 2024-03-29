#!/usr/bin/env node

import { rm, mkdir, writeFile, cp } from 'fs/promises';
import { dirname, sep } from 'path';
import { fileURLToPath } from 'url';
import { totalist } from 'totalist';
import { build } from 'esbuild';
import { watch } from 'watchlist';
import { renderToString } from 'preact-render-to-string';
import { isValidElement } from 'preact';
import { createServer } from 'http';
import sirv from 'sirv';
import { __setCollections, __setPage } from './data/index.js';

try {
  await rm('dist', { recursive: true });
} catch (_) {}

const cwd = process.cwd();
const args = process.argv.slice(2);
const serve = args.includes('--serve');
const watchFiles = serve || args.includes('--watch');
/** @type {() => void | undefined} */
let reloadPage;

const render = async () => {
  /** @type {string[]} */
  const entryPoints = [];
  await totalist('src', (_, path) => /\.p\.ts$|\.p\.tsx$/.test(path) && entryPoints.push(path));

  const { outputFiles } = await build({
    entryPoints,
    format: 'esm',
    platform: 'node',
    minify: true,
    bundle: true,
    write: false,
    inject: [`${dirname(fileURLToPath(import.meta.url))}${sep}preact-shim.js`],
    external: ['s17r', 'esbuild', 'sass'],
    mainFields: ['module', 'main'],
    publicPath: '/',
    loader: {
      '.ico': 'file',
      '.woff2': 'file',
    },
    outdir: 'dist',
  });
  /** @type {import('./data').Collections} */
  const collections = {};
  const pages = [];
  for (const { path, contents } of outputFiles) {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, contents, { encoding: 'utf-8' });

    if (path.endsWith('.js')) {
      const pageModule = await import(`file:///${path}?${Date.now()}`);
      rm(path);
      if (typeof pageModule.render !== 'function') continue;

      const fileType = typeof pageModule.extension === 'string' ? pageModule.extension : 'html';
      const newFolder = fileType === 'html' && !path.endsWith(`${sep}index.p.js`);
      const outPath = `${path.slice(0, -5)}${newFolder ? `${sep}index` : ''}.${fileType}`;
      const url = `/${outPath
        .slice(cwd.length + 6, -11)
        .split(sep)
        .join('/')}`;

      const title = pageModule.title;
      const page = { title, url };
      pages.push({ render: pageModule.render, outPath, page });

      if (typeof pageModule.collection === 'string') {
        const collection = (collections[pageModule.collection] ??= []);
        if (typeof pageModule.collectionIndex === 'number') {
          collection[pageModule.collectionIndex] = page;
        } else {
          collection.push(page);
        }
      }
    }
  }

  __setCollections(collections);
  for (const { render, outPath, page } of pages) {
    __setPage(page);

    let html = await render();
    if (typeof html === 'object' && isValidElement(html)) {
      html = `<!DOCTYPE html>${renderToString(html)}`;
    }
    if (typeof html !== 'string') continue;

    if (serve) {
      let index = html.indexOf('<script');
      if (index === -1) index = html.indexOf('</body>');
      if (index !== -1) {
        html = `${html.slice(
          0,
          index,
        )}<script>new EventSource('/reload-script').addEventListener('reload', () => location.reload())</script>${html.slice(
          index,
        )}`;
      }
    }

    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, { encoding: 'utf-8' });
  }

  if (serve && reloadPage) reloadPage();
};

const copyPublic = async () => await cp('public', 'dist', { recursive: true });

if (watchFiles) {
  await watch(['src'], render);
  await watch(['public'], copyPublic);
}

await render();
await copyPublic();

if (serve) {
  const staticServer = sirv('dist', { dev: true });
  createServer((req, res) => {
    if (req.url === '/reload-script') {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache',
      });
      reloadPage = () => {
        res.write('event: reload\ndata:\n\n');
        res.end();
      };
      return;
    }
    staticServer(req, res);
  }).listen(3000);
}
