import { Article } from '../../../models/article.model';

export interface NewsListItemProps {
  article: Article;
  onClick: () => void;
}
