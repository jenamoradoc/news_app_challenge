import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiNews } from 'react-icons/bi';

import { Routes } from '../../router/routes';
import { NewsContext } from '../../context/newsContext';

import './styles/index.css';

const Navbar = () => {
  const context = useContext(NewsContext);

  const onLogout = () => {
    context?.logout();
  };

  return (
    <nav className='navbar'>
      <Link to={Routes.HomePage} className='navbar-brand'>
        <BiNews size={30} />
        <h3>News App</h3>
      </Link>

      {context?.getUser() ? (
        <div>
          <p>
            Welcome, <span>{context.getUser()}</span>
          </p>
          <button onClick={onLogout} className='login-btn'>
            Logout
          </button>
        </div>
      ) : (
        <Link to={Routes.LoginPage} className='login-btn'>
          Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
