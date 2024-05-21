import { useLocation } from 'react-router-dom';

import { Footer, Navbar } from '../../components';
import MainNews from '../../components/MainNews/MainNews';

import './styles/index.css';

const NewsItemPage = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div className='news-item-page animate__animated animate__fadeIn'>
        <MainNews firstArticle={location.state.article} showOriginalPostLink />
      </div>

      <Footer />
    </>
  );
};

export default NewsItemPage;
