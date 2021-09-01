import { rm, mkdir, writeFile, readFile } from 'fs/promises';
import { dirname, sep } from 'path';
import { totalist } from 'totalist';
import { build } from 'esbuild';
import { watch } from 'watchlist';
import { init } from 'browser-sync';
import { renderToString } from 'preact-render-to-string';
import { isValidElement } from 'preact';
import { __setCollections, __setPage } from 'data';

try {
  await rm('dist', { recursive: true });
} catch (_) {}

const cwd = process.cwd();
const args = process.argv.slice(2);
const serve = args.includes('--serve');
const watchFiles = serve || args.includes('--watch');

const render = async () => {
  try {
    await rm('scripts/css-data.json');
  } catch (_) {}

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
    inject: ['scripts/preact-shim.js'],
    external: ['data'],
    mainFields: ['module', 'main'],
    publicPath: '/',
    loader: {
      '.ico': 'file',
      '.woff2': 'file',
    },
    outdir: 'dist',
  });
  /** @type {import('data').Collections} */
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
      const newFolder = !path.endsWith(`${sep}index.p.js`);
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

    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, { encoding: 'utf-8' });
  }

  try {
    let css = '';
    const rawData = await readFile('scripts/css-data.json', { encoding: 'utf-8' });
    /** @type {import('../src/utils/css').CssData} */
    const data = JSON.parse(rawData);
    if (data.font) css += data.font.map((css) => `@font-face{${css}}`).join('');
    if (data.global) {
      for (const key in data.global) {
        css += `${key}{${data.global[key].join(';')}}`;
      }
    }
    if (data.scoped) {
      for (const key in data.scoped) {
        css += `.${key}{${data.scoped[key]}}`;
      }
    }
    await writeFile('dist/main.css', css, { encoding: 'utf-8' });
    await rm('scripts/css-data.json');
  } catch (_) {}
};

if (watchFiles) await watch(['src'], render);

await render();

if (serve) init({ server: 'dist', open: false, notify: false });
