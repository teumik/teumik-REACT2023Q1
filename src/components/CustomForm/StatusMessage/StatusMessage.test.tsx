import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { StatusMessage } from './StatusMessage';

describe('StatusMessage', () => {
  it('Test render status', () => {
    render(<StatusMessage />);
    expect(screen.getByText('Form data was saved')).toBeInTheDocument();
  });
});
