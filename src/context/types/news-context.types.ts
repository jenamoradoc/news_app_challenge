import { ReactNode } from 'react';

export type NewsContextType = {
  user: string | null;
  authenticate: (email: string) => void;
  getAuth: () => boolean;
  getUser: () => string | null;
  logout: () => void;
};

export interface NewsProviderProps {
  children: ReactNode | ReactNode[];
}
