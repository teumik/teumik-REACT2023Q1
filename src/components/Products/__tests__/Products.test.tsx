import { Mock, describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Products } from '../Products';
import { getProductFromFile } from '../../../utils/getProductFromFile';
import { mockResponse } from '../../../__mocks__/response.mock';

beforeAll(() => {
  vi.mock('../../../utils/getProductFromFile');
  (getProductFromFile as Mock).mockReturnValue(Promise.resolve(mockResponse));
});

afterAll(() => {
  vi.restoreAllMocks();
});

describe('Products', () => {
  it('Test render products', async () => {
    const handler = vi.fn();
    const { products } = mockResponse;
    const result = render(
      <Products
        setQuery={handler}
        query=""
        products={products}
      />
    );
    const titles = await result.findAllByRole('heading', {
      level: 3,
    });
    const prices = await result.findAllByRole('heading', {
      level: 4,
    });
    expect(titles.length).toEqual(2);
    expect(prices.length).toEqual(2);
  });
});
