import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchForm } from '../SearchForm';

describe('SearchForm', () => {
  it('Test search input', () => {
    const handler = vi.fn();
    render(
      <BrowserRouter>
        <SearchForm setQuery={handler} />
      </BrowserRouter>
    );
    const input = screen.getByRole<HTMLInputElement>('textbox');
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'mens' } });
    expect(input.value).toBe('mens');
  });
  it('Test search submit', () => {
    const handler = vi.fn();
    render(
      <BrowserRouter>
        <SearchForm setQuery={handler} />
      </BrowserRouter>
    );
    const form = screen.getByRole('form');
    const button = screen.getByRole('button');
    expect(form).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handler).toHaveBeenCalledTimes(2);
  });
});
