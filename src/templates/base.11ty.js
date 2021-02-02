import { html } from '~utils';

const pageTitle = 'favorites.lenny.fyi';

export const render = ({ content, title, description, collections }) => {
  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title} | ${pageTitle}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <main>
          <h1>${pageTitle}</h1>
          <nav class="nav">
            ${collections.nav
              .sort((a, b) => a.data.order - b.data.order)
              .map(
                (page) =>
                  html`<a
                    href="${page.url}"
                    class="nav__item"
                    ${page.data.title === title && 'aria-current="page"'}
                  >
                    ${page.data.title}
                  </a>`,
              )}
          </nav>
          <h2>${description}</h2>
          <ul class="media-list">
            ${content}
          </ul>
          <footer>
            <span>© 2021 – Lenny Anders</span>
            <a href="https://lenny.fyi/">Personal Homepage</a>
            <a href="https://lenny.fyi/legal">Legal</a>
            <a href="https://lenny.fyi/privacy">Privacy Policy</a>
          </footer>
        </main>
      </body>
    </html>`;
};
