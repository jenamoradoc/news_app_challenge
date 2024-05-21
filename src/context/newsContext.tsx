import { createContext, useEffect, useState } from 'react';
import { NewsContextType, NewsProviderProps } from './types/news-context.types';

export const NewsContext = createContext<NewsContextType>(
  {} as NewsContextType
);

export const NewsProvider = ({ children }: NewsProviderProps) => {
  const getStoredUser = (): string | null => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Error parsing stored user from localStorage', error);
      return null;
    }
  };

  const [user, setUser] = useState<string | null>(getStoredUser());

  const getAuth = (): boolean => !!user;

  const getUser = () => user;

  const authenticate = (userEmail: string) => {
    localStorage.setItem('user', JSON.stringify(userEmail));
    setUser(userEmail);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(getStoredUser());
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <NewsContext.Provider
      value={{ user, getAuth, logout, authenticate, getUser }}
    >
      {children}
    </NewsContext.Provider>
  );
};
