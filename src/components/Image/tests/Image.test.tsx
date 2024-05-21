import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Image from '../Image';

describe('Image', () => {
  it('should render image', () => {
    render(<Image src='https://via.placeholder.com/150' alt='Placeholder' />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
