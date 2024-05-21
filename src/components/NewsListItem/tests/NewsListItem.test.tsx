import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import NewsListItem from '../NewsListItem';

const mockArticle = {
  source: { id: '1', name: 'Source 1' },
  author: 'Author 1',
  title: 'Title 1',
  description: 'Description 1',
  url: 'https://example.com/article1',
  urlToImage: 'https://example.com/image1.jpg',
  publishedAt: new Date('2023-01-01T10:00:00Z'),
  content: 'Content 1',
};

const mockOnClick = vi.fn();

describe('NewsListItem', () => {
  it('should render article title, author, image, and content', () => {
    render(<NewsListItem article={mockArticle} onClick={mockOnClick} />);

    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Author: Author 1...')).toBeInTheDocument();
    expect(screen.getByAltText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('should render "(No content provided)" when content is null', () => {
    const articleWithNoContent = { ...mockArticle, content: null };

    render(
      <NewsListItem article={articleWithNoContent} onClick={mockOnClick} />
    );

    expect(screen.getByText('(No content provided)')).toBeInTheDocument();
  });

  it('should call onClick when the list item is clicked', () => {
    render(<NewsListItem article={mockArticle} onClick={mockOnClick} />);

    const listItem = screen.getByRole('listitem');
    fireEvent.click(listItem);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
