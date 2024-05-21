import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NewsContext } from '../context/newsContext';
import { Routes } from '../router/routes';
import { Credentials } from '../types/news.types';
import emailRegex from '../pages/LoginPage/utilities/emailRegex';
import { UserCredentials } from '../utilities/credentials';

const useLogin = () => {
  const navigate = useNavigate();

  const context = useContext(NewsContext);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    credentials: Credentials
  ) => {
    event.preventDefault();

    if (!credentials.email && !credentials.password) {
      return toast.error('All fields are required', {
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
        hideProgressBar: false,
        pauseOnHover: true,
        position: 'top-right',
        progress: undefined,
        theme: 'dark',
      });
    }

    if (!credentials.email) {
      return toast.error('Email is required', {
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
        hideProgressBar: false,
        pauseOnHover: true,
        position: 'top-right',
        progress: undefined,
        theme: 'dark',
      });
    }

    if (!emailRegex.test(credentials.email)) {
      return toast.error('Invalid email', {
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
        hideProgressBar: false,
        pauseOnHover: true,
        position: 'top-right',
        progress: undefined,
        theme: 'dark',
      });
    }

    if (!credentials.password) {
      return toast.error('Password is required', {
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
        hideProgressBar: false,
        pauseOnHover: true,
        position: 'top-right',
        progress: undefined,
        theme: 'dark',
      });
    }

    if (
      credentials.email === UserCredentials.email &&
      credentials.password === UserCredentials.password
    ) {
      toast.success(
        "You've successfully logged in! Redirecting to the home page...",
        {
          autoClose: 3000,
          closeOnClick: true,
          draggable: true,
          hideProgressBar: false,
          pauseOnHover: true,
          position: 'top-right',
          progress: undefined,
          theme: 'dark',
        }
      );

      setTimeout(() => {
        context?.authenticate(credentials.email);
        navigate(Routes.HomePage, { replace: true });
      }, 3000);
    } else {
      return toast.error('Invalid email or password', {
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
        hideProgressBar: false,
        pauseOnHover: true,
        position: 'top-right',
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return {
    handleSubmit,
  };
};

export default useLogin;
