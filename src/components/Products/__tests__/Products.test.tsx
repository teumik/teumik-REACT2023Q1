import { Mock, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Products } from '../Products';
import { customFetch } from '../../../utils/customFetch';
import { mockResponse } from '../../../__mocks__/response.mock';

beforeAll(() => {
  vi.mock('../../../utils/customFetch');
  (customFetch as Mock).mockReturnValue(Promise.resolve(mockResponse));
});

afterAll(() => {
  vi.restoreAllMocks();
});

describe('Products', () => {
  it('Test render products', async () => {
    const handler = vi.fn();
    const { results } = mockResponse;
    render(
      <Products
        isPending={false}
        notFoundMessage=""
        searchItems={handler}
        products={results}
      />
    );
    const titles = await screen.findAllByRole('heading', {
      level: 3,
    });
    expect(titles.length).toEqual(2);
  });
  it('Test render notFoundMessage', async () => {
    const handler = vi.fn();
    const { results } = mockResponse;
    render(
      <Products
        isPending={false}
        notFoundMessage="quaja"
        searchItems={handler}
        products={results}
      />
    );
    const titles = await screen.findAllByRole('heading', {
      level: 3,
    });
    expect(titles.length).toEqual(2);
    expect(screen.getByText(/quaja/i)).toBeInTheDocument();
  });
});
