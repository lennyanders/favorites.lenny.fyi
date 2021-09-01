import { IconLink } from '../IconLink';
import amvNewsIcon from '../../assets/amvnewsIcon.ico';

export const AmvNews = ({ id }: { id: string }) => (
  <IconLink url={`https://amvnews.ru/index.php?go=Files&in=view&id=${id}`}>
    <image href={amvNewsIcon} x="4" y="4" height="16" width="16" />
  </IconLink>
);
