import { describe, it, expect } from 'vitest';

import { splitText } from './splitText';

describe('splitText', () => {
  it('should return the original string followed by ellipsis if no limit is provided', () => {
    expect(splitText('Test User 1')).toBe('Test User 1...');
  });

  it('should return the original string followed by ellipsis when limit is 1', () => {
    expect(splitText('Test User 1', 1)).toBe('Test User 1...');
  });

  it('should return the first user followed by ellipsis when limit is 1', () => {
    expect(splitText('Test User 1, Test User 2', 1)).toBe('Test User 1...');
  });

  it('should return both users followed by ellipsis when limit is 2', () => {
    expect(splitText('Test User 1, Test User 2', 2)).toBe(
      'Test User 1, Test User 2...'
    );
  });

  it('should return Anonymous if text is null', () => {
    expect(splitText(null)).toBe('Anonymous');
  });
});
