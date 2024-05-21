import { NewsListItemProps } from './types/news-list-item.types';

import './styles/index.css';
import Image from '../Image/Image';
import { splitText } from '../../utilities/splitText';

const NewsListItem = ({
  article: { author, title, urlToImage, content },
  onClick,
}: NewsListItemProps) => {
  return (
    <li className='news-list-item' onClick={onClick}>
      <Image src={urlToImage} alt={title} />
      <div>
        <p>Author: {splitText(author)}</p>
      </div>
      <h5>{title}</h5>

      <p>{content ?? '(No content provided)'}</p>
    </li>
  );
};

export default NewsListItem;
