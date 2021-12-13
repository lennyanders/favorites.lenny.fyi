import { IconLink } from '../IconLink';

export const Akross = ({ id }: { id: string }) => (
  <IconLink url={`https://akross.ru/index.cgi?video=${id};l=e`}>
    <image href="/icons/akrossIcon.ico" x="2" y="2" height="20" width="20" />
  </IconLink>
);
