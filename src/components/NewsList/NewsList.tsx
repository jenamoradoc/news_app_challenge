import { useNavigate } from 'react-router-dom';

import NewsListItem from '../NewsListItem/NewsListItem';
import MainNews from '../MainNews/MainNews';
import { NewsListProps } from './types/news-list.types';
import { Article } from '../../models/article.model';
import { Routes } from '../../router/routes';

import './styles/index.css';

const NewsList = ({ articles }: NewsListProps) => {
  const navigate = useNavigate();

  const firstArticle = articles[0];
  const restArticles = articles.slice(1);

  const handleRedirect = (article: Article) => {
    navigate(Routes.NewsItemPage, { state: { article } });
  };

  return (
    <div className='news-container animate__animated animate__fadeIn'>
      <div onClick={() => handleRedirect(firstArticle)}>
        <MainNews firstArticle={firstArticle} />
      </div>
      <ul className='news-list'>
        {restArticles.map((article) => (
          <NewsListItem
            key={article.title}
            article={article}
            onClick={() => handleRedirect(article)}
          />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
