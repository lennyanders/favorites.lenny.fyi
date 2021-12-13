import { IconLink } from '../IconLink';

export const AnimeMusicVideos = ({ id }: { id: string }) => (
  <IconLink url={`https://www.animemusicvideos.org/members/members_videoinfo.php?v=${id}`}>
    <image href="/icons/animemusicvideosIcon.ico" x="4" y="4" height="16" width="16" />
  </IconLink>
);
