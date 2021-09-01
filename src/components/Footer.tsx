import { style } from '../utils/css';

const footerClass = style({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '1rem',
  gap: '1rem',
  borderTop: `${2 / 16}rem solid #191919`,
  color: '#ddd',
});

const homePageLinkClass = style({ marginRight: 'auto' });

export const Footer = () => (
  <footer class={footerClass}>
    <span>© 2021 – Lenny Anders</span>
    <a href="https://lenny.fyi/" class={homePageLinkClass}>
      Personal Homepage
    </a>
    <a href="https://lenny.fyi/legal">Legal</a>
    <a href="https://lenny.fyi/privacy">Privacy Policy</a>
  </footer>
);
