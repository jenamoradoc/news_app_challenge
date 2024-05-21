export class NewsApi {
  constructor(protected baseUrl: string, protected apiKey: string) {}

  async getNews<T>(): Promise<T> {
    const url = `${this.baseUrl}/top-headlines?country=us&apiKey=${this.apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async searchNews<T>(query: string): Promise<T> {
    const url = `${this.baseUrl}/everything?q=${query}&apiKey=${this.apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}

export const newsApi = new NewsApi(
  import.meta.env.VITE_NEWS_API_URL,
  import.meta.env.VITE_NEWS_API_KEY
);
