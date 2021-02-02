import { html } from '~utils';

export default (id) =>
  html`<a href="https://www.animemusicvideos.org/members/members_videoinfo.php?v=${id}">
    <svg viewBox="0 0 24 24" class="icon">
      <image href="/animemusicvideosIcon.ico" x="4" y="4" height="16" width="16" />
    </svg>
  </a>`;
