import { Link } from 'react-router-dom';

import { Footer, Navbar } from '../../components';
import { Routes } from '../../router/routes';

import './styles/index.css';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className='not-found-container'>
        <div className='not-found-content'>
          <h1>404</h1>
          <p>Sorry, the page you're looking for doesn't exist.</p>
          <Link to={Routes.HomePage}>Go to Home</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
