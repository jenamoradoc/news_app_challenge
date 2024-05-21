import { FaLink } from 'react-icons/fa6';

import Image from '../Image/Image';
import { splitText } from '../../utilities/splitText';
import { MainNewsProps } from './types/main-news.types';

import './styles/index.css';

const MainNews = ({
  firstArticle,
  showOriginalPostLink = false,
}: MainNewsProps) => {
  return (
    <main className='main-content'>
      <div className='main-content__image'>
        <Image src={firstArticle?.urlToImage} alt={firstArticle?.title} />
      </div>

      <div className='main-content__info'>
        <div>
          <p>Author: {splitText(firstArticle?.author, 2)}</p>
          {showOriginalPostLink && (
            <a href={firstArticle?.url} target='_blank'>
              Original Post <FaLink />
            </a>
          )}
        </div>
        <h1>{firstArticle?.title}</h1>
        <p>{firstArticle?.content ?? 'No content provided'}</p>
      </div>
    </main>
  );
};

export default MainNews;
