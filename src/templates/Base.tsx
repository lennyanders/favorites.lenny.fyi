import { RenderableProps } from 'preact';
import { page } from 's17r/data';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

const pageTitle = 'favorites.lenny.fyi';

export const Base = ({ description, children }: RenderableProps<{ description: string }>) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        {page.title} | {pageTitle}
      </title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/styles/main.css" />
    </head>
    <body>
      <main>
        <h1 class="text-center">
          <a href="/">{pageTitle}</a>
        </h1>
        <Nav />
        <h2 class="pl-4">{description}</h2>
        {children}
        <Footer />
      </main>
    </body>
  </html>
);
