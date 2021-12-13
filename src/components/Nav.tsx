import { page, collections } from 's17r/data';

export const Nav = () => (
  <nav class="nav">
    {collections.nav.map(({ url, title }) => (
      <a href={url} class="nav__link" {...(url === page.url && { 'aria-current': 'page' })}>
        {title}
      </a>
    ))}
  </nav>
);
