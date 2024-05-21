import { Navbar } from '../../components';
import LoginForm from './components/LoginForm';

import './styles/index.css';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className='login-page'>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
