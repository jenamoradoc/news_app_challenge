import { Source } from './source.model';

export interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: null | string;
  url: string;
  urlToImage: null | string;
  publishedAt: Date;
  content: null | string;
}
