import { describe, it, expect, vi } from 'vitest';

import { NewsApi } from '../http-api';
import { NewsResponse } from '../../models/news-response.model';

const mockFetch = vi.fn().mockImplementation(async (url: string) => {
  if (url.includes('/top-headlines')) {
    return {
      status: 'ok',
      totalResults: 1,
      articles: ['mock article'],
    };
  } else if (url.includes('/everything')) {
    return {
      status: 'ok',
      totalResults: 1,
      articles: ['mock article'],
    };
  }
});

const mockEnvironment = {
  VITE_NEWS_API_URL: 'https://example.com/api',
  VITE_NEWS_API_KEY: 'mock-api-key',
};

class MockNewsApi extends NewsApi {
  constructor() {
    super(mockEnvironment.VITE_NEWS_API_URL, mockEnvironment.VITE_NEWS_API_KEY);
  }

  async getNews<T>(): Promise<T> {
    return await mockFetch(
      `${this.baseUrl}/top-headlines?country=us&apiKey=${this.apiKey}`
    );
  }

  async searchNews<T>(query: string): Promise<T> {
    return await mockFetch(
      `${this.baseUrl}/everything?q=${query}&apiKey=${this.apiKey}`
    );
  }
}

describe('NewsApi', () => {
  it('should fetch top headlines', async () => {
    mockFetch.mockClear();

    const newsApi = new MockNewsApi();

    const data = await newsApi.getNews<NewsResponse>();

    expect(data.articles).toEqual(['mock article']);
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      `${mockEnvironment.VITE_NEWS_API_URL}/top-headlines?country=us&apiKey=${mockEnvironment.VITE_NEWS_API_KEY}`
    );
  });

  it('should search news', async () => {
    mockFetch.mockClear();

    const newsApi = new MockNewsApi();
    const data = await newsApi.searchNews<NewsResponse>('query');

    expect(data.articles).toEqual(['mock article']);
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      `${mockEnvironment.VITE_NEWS_API_URL}/everything?q=query&apiKey=${mockEnvironment.VITE_NEWS_API_KEY}`
    );
  });
});
