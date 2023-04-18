import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotFound } from '../NotFound';

describe('NotFound', () => {
  it('Test render NotFound', () => {
    render(<NotFound />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('404');
  });
});
