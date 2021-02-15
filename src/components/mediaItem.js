import { css, html } from '~utils';
import animemusicvideos from './IconLinks/animemusicvideos';
import amvnews from './IconLinks/amvnews';
import akross from './IconLinks/akross';
import imdb from './IconLinks/imdb';
import disney from './IconLinks/disney';
import netflix from './IconLinks/netflix';
import youtube from './IconLinks/youtube';
import vimeo from './IconLinks/vimeo';
import web from './IconLinks/web';

const rootClass = css`
  display: grid;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: #191919;
  border-radius: 0.25rem;
  color: #ddd;
`;

const TopClass = css`
  display: flex;
  gap: 0.25rem;
  color: #fafafa;
`;

const headlineClass = css`
  flex: 1;
`;

export default (
  {
    title,
    animemusicvideosId,
    amvnewsId,
    akrossId,
    imdbId,
    disneyPlusId,
    netflixId,
    youtubeId,
    vimeoId,
    homepage,
  },
  content,
) => html`<li class="${rootClass}">
  <div class="${TopClass}">
    <h3 class="${headlineClass}">${title}</h3>
    ${animemusicvideosId && animemusicvideos(animemusicvideosId)} ${amvnewsId && amvnews(amvnewsId)}
    ${akrossId && akross(akrossId)} ${imdbId && imdb(imdbId)}
    ${disneyPlusId && disney(disneyPlusId)} ${netflixId && netflix(netflixId)}
    ${youtubeId && youtube(youtubeId)} ${vimeoId && vimeo(vimeoId)} ${homepage && web(homepage)}
  </div>
  ${content}
</li>`;
