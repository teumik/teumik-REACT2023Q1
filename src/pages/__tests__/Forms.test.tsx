import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Forms } from '../Forms';

describe('Forms', () => {
  it('Test render NotFound', () => {
    render(<Forms />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Forms');
  });
});
