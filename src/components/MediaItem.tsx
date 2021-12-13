import { RenderableProps } from 'preact';
import { AnyMediaItem } from '../shared';
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

export const MediaItem = ({ children, media }: RenderableProps<{ media: AnyMediaItem }>) => (
  <li class="media-item">
    <div class="media-item__top">
      <h3 class="media-item__headline">
        {media.title}
        {media.originalTitle && (
          <>
            {' '}
            ({media.originalTitle}
            {media.origin && (
              <>
                {' '}
                <small class="media-item__origin">{media.origin}</small>
              </>
            )}
            )
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
