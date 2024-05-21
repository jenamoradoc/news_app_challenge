import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import NewsList from '../NewsList';
import { Article } from '../../../models/article.model';

const mockArticles: Article[] = [
  {
    source: { id: '1', name: 'Source 1' },
    author: 'Author 1',
    title: 'Title 1',
    description: 'Description 1',
    url: 'https://example.com/article1',
    urlToImage: 'https://example.com/image1.jpg',
    publishedAt: new Date('2023-01-01T10:00:00Z'),
    content: 'Content 1',
  },
  {
    source: { id: '2', name: 'Source 2' },
    author: 'Author 2',
    title: 'Title 2',
    description: 'Description 2',
    url: 'https://example.com/article2',
    urlToImage: 'https://example.com/image2.jpg',
    publishedAt: new Date('2023-02-01T11:00:00Z'),
    content: 'Content 2',
  },
  {
    source: { id: null, name: 'Source 3' },
    author: 'Author 3',
    title: 'Title 3',
    description: 'Description 3',
    url: 'https://example.com/article3',
    urlToImage: 'https://example.com/image3.jpg',
    publishedAt: new Date('2023-03-01T12:00:00Z'),
    content: 'Content 3',
  },
  {
    source: { id: '4', name: 'Source 4' },
    author: null,
    title: 'Title 4',
    description: null,
    url: 'https://example.com/article4',
    urlToImage: null,
    publishedAt: new Date('2023-04-01T13:00:00Z'),
    content: null,
  },
  {
    source: { id: '5', name: 'Source 5' },
    author: 'Author 5',
    title: 'Title 5',
    description: 'Description 5',
    url: 'https://example.com/article5',
    urlToImage: 'https://example.com/image5.jpg',
    publishedAt: new Date('2023-05-01T14:00:00Z'),
    content: 'Content 5',
  },
  {
    source: { id: '6', name: 'Source 6' },
    author: 'Author 6',
    title: 'Title 6',
    description: 'Description 6',
    url: 'https://example.com/article6',
    urlToImage: 'https://example.com/image6.jpg',
    publishedAt: new Date('2023-06-01T15:00:00Z'),
    content: 'Content 6',
  },
  {
    source: { id: null, name: 'Source 7' },
    author: 'Author 7',
    title: 'Title 7',
    description: 'Description 7',
    url: 'https://example.com/article7',
    urlToImage: 'https://example.com/image7.jpg',
    publishedAt: new Date('2023-07-01T16:00:00Z'),
    content: 'Content 7',
  },
  {
    source: { id: '8', name: 'Source 8' },
    author: null,
    title: 'Title 8',
    description: null,
    url: 'https://example.com/article8',
    urlToImage: null,
    publishedAt: new Date('2023-08-01T17:00:00Z'),
    content: null,
  },
  {
    source: { id: '9', name: 'Source 9' },
    author: 'Author 9',
    title: 'Title 9',
    description: 'Description 9',
    url: 'https://example.com/article9',
    urlToImage: 'https://example.com/image9.jpg',
    publishedAt: new Date('2023-09-01T18:00:00Z'),
    content: 'Content 9',
  },
  {
    source: { id: '10', name: 'Source 10' },
    author: 'Author 10',
    title: 'Title 10',
    description: 'Description 10',
    url: 'https://example.com/article10',
    urlToImage: 'https://example.com/image10.jpg',
    publishedAt: new Date('2023-10-01T19:00:00Z'),
    content: 'Content 10',
  },
];

describe('NewsList', () => {
  it('should render news list', () => {
    render(
      <MemoryRouter>
        <NewsList articles={mockArticles} />
      </MemoryRouter>
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should render news list items', () => {
    render(
      <MemoryRouter>
        <NewsList articles={mockArticles} />
      </MemoryRouter>
    );

    // First article is displayed as main news
    expect(screen.getAllByRole('listitem')).toHaveLength(
      mockArticles.length - 1
    );
  });

  it('should render news list item', () => {
    render(
      <MemoryRouter>
        <NewsList articles={mockArticles} />
      </MemoryRouter>
    );
    expect(screen.getByText('Title 1')).toBeInTheDocument();
  });

  it('should render news list item content', () => {
    render(
      <MemoryRouter>
        <NewsList articles={mockArticles} />
      </MemoryRouter>
    );
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });
});
