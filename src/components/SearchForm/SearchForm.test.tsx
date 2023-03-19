import { describe, it, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
  it('Test search input', () => {
    const handler = vi.fn();
    const input = render(
      <BrowserRouter>
        <SearchForm setQuery={handler} />
      </BrowserRouter>
    ).getByRole('textbox') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'mens' } });
    expect(input.value).toBe('mens');
  });
  it('Test search submit', () => {
    const handler = vi.fn();
    const result = render(
      <BrowserRouter>
        <SearchForm setQuery={handler} />
      </BrowserRouter>
    );
    const form = result.getByRole('form');
    const button = result.getByRole('button');
    expect(form).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handler).toHaveBeenCalledTimes(2);
  });
});
