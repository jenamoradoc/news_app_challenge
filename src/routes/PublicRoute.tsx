import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { Routes } from '../router/routes';
import { NewsContext } from '../context/newsContext';
import { PublicRouteProps } from '../types/news.types';

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const context = useContext(NewsContext);

  return (
    <>
      {!context?.getAuth() ? (
        <div className='animate__animated animate__fadeIn'>{children}</div>
      ) : (
        <Navigate to={Routes.HomePage} replace />
      )}
    </>
  );
};
