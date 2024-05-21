import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useLogin from '../../../hooks/useLogin';

import '../styles/index.css';
import { Credentials } from '../../../types/news.types';
import { UserCredentials } from '../../../utilities/credentials';

const LoginForm = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  });

  const { handleSubmit } = useLogin();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <form
        onSubmit={(event) => handleSubmit(event, credentials)}
        className='login-form bg-[#FEFFFF] w-96 rounded-lg flex flex-col p-8 gap-4'
      >
        <h2 className='text-2xl text-center'>Enter your credentials</h2>

        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            value={credentials.email}
            onChange={handleInputChange}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <strong>Credentials</strong>
          <p>
            <strong>Email:</strong> {UserCredentials.email}
          </p>
          <p>
            <strong>Password:</strong> {UserCredentials.password}
          </p>
        </div>

        <button type='submit'>Login</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
