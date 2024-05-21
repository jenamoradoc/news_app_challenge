import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { NewsContext } from '../context/newsContext';
import { PrivateRouteProps } from '../types/news.types';
import { Routes } from '../router/routes';

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const context = useContext(NewsContext);

  return (
    <>
      {context?.getAuth() ? (
        <div className='animate__animated animate__fadeIn'>{children}</div>
      ) : (
        <Navigate to={Routes.LoginPage} replace />
      )}
    </>
  );
};

export default PrivateRoute;
