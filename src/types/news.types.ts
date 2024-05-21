import { ReactNode } from 'react';

export interface PublicRouteProps {
  children: ReactNode | ReactNode[];
}

export interface PrivateRouteProps extends PublicRouteProps {}

export interface Credentials {
  email: string;
  password: string;
}
