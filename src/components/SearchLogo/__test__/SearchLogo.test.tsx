import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SearchLogo } from '../SearchLogo';

describe('RatingLogo', () => {
  it('Test render rating logo', () => {
    render(<SearchLogo />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
