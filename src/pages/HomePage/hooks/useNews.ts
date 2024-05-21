import { useEffect, useState } from 'react';

import { Article } from '../../../models/article.model';
import { newsApi } from '../../../http/http-api';
import { NewsResponse } from '../../../models/news-response.model';

const useNews = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const news = await newsApi.getNews<NewsResponse>();

        const filteredArticles = news.articles.filter(
          (article) => article.title !== '[Removed]'
        );

        setArticles(filteredArticles);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error loading news:', error);
        setLoading(false);
      }
    })();
  }, []);

  const handleNewsSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    const news = await newsApi.searchNews<NewsResponse>(searchTerm);

    const filteredArticles = news.articles.filter(
      (article) => article.title !== '[Removed]'
    );

    setArticles(filteredArticles);
    setLoading(false);
  };

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  return {
    articles,
    loading,
    searchTerm,
    handleNewsSearch,
    handleSearchTermChange,
  };
};

export default useNews;
