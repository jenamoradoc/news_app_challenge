import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MainNewsProps } from '../types/main-news.types';
import { Article } from '../../../models/article.model';
import MainNews from '../MainNews';

vi.mock('../Image/Image', () => ({
  __esModule: true,
  default: vi.fn().mockImplementation(() => <img src='' alt='' />),
}));

vi.mock('../../utilities/splitText', () => ({
  __esModule: true,
  splitText: vi.fn().mockReturnValue('Test Author'),
}));

describe('MainNews', () => {
  const mockArticle: Article = {
    source: { id: '1', name: 'Source 1' },
    author: 'Test Author',
    title: 'Title 1',
    description: 'Description 1',
    url: 'https://example.com/article1',
    urlToImage: 'https://example.com/image1.jpg',
    publishedAt: new Date('2023-01-01T10:00:00Z'),
    content: 'Content 1',
  };

  it('should render main news without original post link', () => {
    const props: MainNewsProps = { firstArticle: mockArticle };

    render(<MainNews {...props} />);

    expect(screen.getByText(/Author: Test Author/)).toBeInTheDocument();
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(
      screen.queryByRole('link', { name: /Original Post/i })
    ).not.toBeInTheDocument();
  });

  it('should render main news with original post link', () => {
    const props: MainNewsProps = {
      firstArticle: mockArticle,
      showOriginalPostLink: true,
    };

    render(<MainNews {...props} />);

    expect(screen.getByText(/Test Author/)).toBeInTheDocument();
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Original Post/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Original Post/i })
    ).toHaveAttribute('href', 'https://example.com/article1');
  });
});
