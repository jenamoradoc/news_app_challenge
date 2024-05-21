import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Navbar from '../Navbar';
import { NewsContext } from '../../../context/newsContext';
import { NewsContextType } from '../../../context/types/news-context.types';
import { UserCredentials } from '../../../utilities/credentials';

const mockLogout = vi.fn();
const mockGetUser = vi.fn();

const mockContextValue: NewsContextType = {
  getUser: mockGetUser,
  logout: mockLogout,
  authenticate: vi.fn(),
  getAuth: vi.fn(),
  user: null,
};

describe('Navbar', () => {
  it('should render Navbar with login link when no user is logged in', () => {
    mockGetUser.mockReturnValue(null);
    render(
      <MemoryRouter>
        <NewsContext.Provider value={mockContextValue}>
          <Navbar />
        </NewsContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.queryByText(/Welcome,/)).not.toBeInTheDocument();
  });

  it('should render Navbar with welcome message and logout button when user is logged in', () => {
    mockGetUser.mockReturnValue(UserCredentials.email);

    render(
      <MemoryRouter>
        <NewsContext.Provider value={mockContextValue}>
          <Navbar />
        </NewsContext.Provider>
      </MemoryRouter>
    );

    expect(
      screen.getByText((_: string, element: Element | null) => {
        const hasText = (node: Element | null) =>
          node?.textContent === `Welcome, ${UserCredentials.email}`;
        const nodeHasText = element ? hasText(element) : false;
        const childrenDontHaveText = element
          ? Array.from(element.children).every((child) => !hasText(child))
          : false;
        return nodeHasText && childrenDontHaveText;
      })
    ).toBeInTheDocument();

    expect(screen.getByText('Logout')).toBeInTheDocument();
    expect(screen.queryByText('Login')).not.toBeInTheDocument();
  });

  it('should call logout function when logout button is clicked', () => {
    mockGetUser.mockReturnValue(UserCredentials.email);
    render(
      <MemoryRouter>
        <NewsContext.Provider value={mockContextValue}>
          <Navbar />
        </NewsContext.Provider>
      </MemoryRouter>
    );

    const logoutButton = screen.getByText('Logout');
    fireEvent.click(logoutButton);

    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});
