import theNavigation from '~components/theNavigation';
import theFooter from '~components/theFooter';
import { css, html } from '~utils';

css`
  body {
    margin: 0;
    padding: 5rem 0.5rem 0;
    font-family: 'atkinson_hyperlegible', Helvetica, Arial, sans-serif;
    background-color: #111;
    color: #f9f9f9;
    overflow-y: scroll;
    line-height: 1.5;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  @font-face {
    font-family: 'atkinson_hyperlegible';
    src: url('/fonts/Atkinson-Hyperlegible-Bold-102a.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'atkinson_hyperlegible';
    src: url('/fonts/Atkinson-Hyperlegible-BoldItalic-102a.woff2') format('woff2');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'atkinson_hyperlegible';
    src: url('/fonts/Atkinson-Hyperlegible-Italic-102a.woff2') format('woff2');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'atkinson_hyperlegible';
    src: url('/fonts/Atkinson-Hyperlegible-Regular-102a.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @media screen and (min-width: 32rem) {
    body {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  main {
    max-width: 56rem;
    width: 100%;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
  }

  h1 {
    text-align: center;
  }

  h2 {
    padding-left: 1rem;
  }
`;

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
          ${theNavigation({ collections, title })}
          <h2>${description}</h2>
          ${content} ${theFooter()}
        </main>
      </body>
    </html>`;
};
