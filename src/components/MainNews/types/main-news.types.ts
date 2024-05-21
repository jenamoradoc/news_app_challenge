import { Article } from '../../../models/article.model';

export interface MainNewsProps {
  firstArticle: Article;
  showOriginalPostLink?: boolean;
}
