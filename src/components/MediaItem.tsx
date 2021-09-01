import { RenderableProps } from 'preact';
import { AnyMediaItem } from '../shared';
import { style } from '../utils/css';
import { Akross } from './iconLinks/Akross';
import { AmvNews } from './iconLinks/AmvNews';
import { AnimeMusicVideos } from './iconLinks/AnimeMusicVideos';
import { DisneyPlus } from './iconLinks/DisneyPlus';
import { Imdb } from './iconLinks/Imdb';
import { Netflix } from './iconLinks/Netflix';
import { PrimeVideo } from './iconLinks/PrimeVideo';
import { Vimeo } from './iconLinks/Vimeo';
import { Web } from './iconLinks/Web';
import { YouTube } from './iconLinks/YouTube';

const mediaItemClass = style({
  display: 'grid',
  gap: '0.5rem',
  padding: '0.75rem 1rem',
  borderRadius: '0.25rem',
  backgroundColor: '#191919',
  color: '#ddd',
});

const topClass = style({
  display: 'flex',
  gap: '0.25rem',
  color: '#fafafa',
});

const headlineClass = style({
  flex: 1,
  margin: 0,
});

const originClass = style({
  textTransform: 'uppercase',
  opacity: 0.75,
  fontWeight: 400,
});

export const MediaItem = ({ children, media }: RenderableProps<{ media: AnyMediaItem }>) => (
  <li class={mediaItemClass}>
    <div class={topClass}>
      <h3 class={headlineClass}>
        {media.title}
        {media.originalTitle && (
          <>
            ({media.originalTitle}
            {media.origin && <small class={originClass}>{media.origin}</small>})
          </>
        )}
      </h3>
      {media.animemusicvideosId && <AnimeMusicVideos id={media.animemusicvideosId} />}
      {media.amvnewsId && <AmvNews id={media.amvnewsId} />}
      {media.akrossId && <Akross id={media.akrossId} />}
      {media.imdbId && <Imdb id={media.imdbId} />}
      {media.disneyPlusId && <DisneyPlus id={media.disneyPlusId} />}
      {media.netflixId && <Netflix id={media.netflixId} />}
      {media.primeVideoId && <PrimeVideo id={media.primeVideoId} />}
      {media.youtubeId && <YouTube id={media.youtubeId} />}
      {media.vimeoId && <Vimeo id={media.vimeoId} />}
      {media.homepage && <Web url={media.homepage} />}
    </div>
    {children}
  </li>
);
