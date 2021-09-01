import { RenderableProps } from 'preact';
import { globalStyle, fontFace, style } from '../utils/css';
import { page } from 'data';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import faviconUrl from '../assets/favicon.ico';
import atkinsonRegular from '../assets/fonts/Atkinson-Hyperlegible-Regular-102a.woff2';
import atkinsonItalic from '../assets/fonts/Atkinson-Hyperlegible-Italic-102a.woff2';
import atkinsonBold from '../assets/fonts/Atkinson-Hyperlegible-Bold-102a.woff2';
import atkinsonBoldItalic from '../assets/fonts/Atkinson-Hyperlegible-BoldItalic-102a.woff2';

fontFace({
  fontFamily: '"atkinson_hyperlegible"',
  src: `url('${atkinsonRegular}') format('woff2')`,
  fontWeight: 'normal',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

fontFace({
  fontFamily: '"atkinson_hyperlegible"',
  src: `url('${atkinsonItalic}') format('woff2')`,
  fontWeight: 'normal',
  fontStyle: 'italic',
  fontDisplay: 'swap',
});

fontFace({
  fontFamily: '"atkinson_hyperlegible"',
  src: `url('${atkinsonBold}') format('woff2')`,
  fontWeight: 'bold',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

fontFace({
  fontFamily: '"atkinson_hyperlegible"',
  src: `url('${atkinsonBoldItalic}') format('woff2')`,
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontDisplay: 'swap',
});

globalStyle('*', { boxSizing: 'border-box' });

globalStyle('a', { color: 'currentcolor', textDecoration: 'none' });

globalStyle('body', {
  margin: 0,
  padding: '5rem 0.5rem 0',
  fontFamily: '"atkinson_hyperlegible", Helvetica, Arial, sans-serif',
  backgroundColor: '#111',
  color: '#f9f9f9',
  overflowY: 'scroll',
  lineHeight: 1.5,
});

const mainClass = style({
  maxWidth: '56rem',
  width: '100%',
  margin: '0 auto',
  display: 'grid',
  gap: '2rem',
});

const titleClass = style({ textAlign: 'center', margin: 0 });

const descriptionClass = style({ margin: 0, paddingLeft: '1rem' });

const pageTitle = 'favorites.lenny.fyi';

export const Base = ({ description, children }: RenderableProps<{ description: string }>) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        {page.title} | {pageTitle}
      </title>
      <link rel="shortcut icon" href={faviconUrl} />
      <link rel="stylesheet" href="/main.css" />
    </head>
    <body>
      <main class={mainClass}>
        <h1 class={titleClass}>
          <a href="/">{pageTitle}</a>
        </h1>
        <Nav />
        <h2 class={descriptionClass}>{description}</h2>
        {children}
        <Footer />
      </main>
    </body>
  </html>
);
