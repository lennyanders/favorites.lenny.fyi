import { IconLink } from '../IconLink';
import akrossIcon from '../../assets/akrossIcon.ico';

export const Akross = ({ id }: { id: string }) => (
  <IconLink url={`https://akross.ru/index.cgi?video=${id};l=e`}>
    <image href={akrossIcon} x="2" y="2" height="20" width="20" />
  </IconLink>
);
