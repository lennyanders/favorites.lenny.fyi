import { page, collections } from 's17r/data';
import { globalStyle, style } from 's17r/css';

const navClass = style({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0 0.75rem',
  gap: '0.5rem',
  textTransform: 'uppercase',
  borderBottom: `${2 / 16}rem solid #191919`,
});

const navLinkClass = style({
  position: 'relative',
  padding: '0.5rem',
  color: '#888',
  fontWeight: 'bold',
  transition: 'color 0.2s ease',
});
globalStyle(`.${navLinkClass}[aria-current], .${navLinkClass}:hover, .${navLinkClass}:focus`, {
  color: '#ddd',
});

globalStyle(`.${navLinkClass}::after`, {
  content: '""',
  display: 'block',
  position: 'absolute',
  top: '100%',
  left: 0,
  height: `${2 / 16}rem`,
  width: '100%',
  backgroundColor: '#e92063',
  opacity: 0,
  transition: 'opacity 0.2s ease',
});
globalStyle(`.${navLinkClass}[aria-current]::after`, { opacity: 1 });

export const Nav = () => (
  <nav class={navClass}>
    {collections.nav.map(({ url, title }) => (
      <a href={url} class={navLinkClass} {...(url === page.url && { 'aria-current': 'page' })}>
        {title}
      </a>
    ))}
  </nav>
);
