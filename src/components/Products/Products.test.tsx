import { Mock, describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Products } from './Products';
import { getProductFromFile } from '../../utils/getProductFromFile';

const fakeProducts = {
  products: [
    {
      category: 'book',
      description: 'The Boy Who Lived Has Come To Die',
      id: 999,
      image: 'http://url.com',
      price: 8888,
      rating: {
        count: 77777,
        rate: 4.9,
      },
      title: 'Harry Potter',
    },
    {
      category: 'kitchen',
      description: 'Big size',
      id: 123,
      image: 'http://url2.com',
      price: 1234,
      rating: {
        count: 12345,
        rate: 0.1,
      },
      title: 'Silver plate',
    },
  ],
};

beforeEach(() => {
  vi.mock('../../utils/getProductFromFile');
  (getProductFromFile as Mock).mockReturnValue(Promise.resolve(fakeProducts));
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Products', () => {
  it('Test render products', async () => {
    const handler = vi.fn();
    const { products } = fakeProducts;
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
