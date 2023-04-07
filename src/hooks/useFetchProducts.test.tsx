import { Mock, describe, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useFetchProducts } from './useFetchProducts';
import { Product } from '../components/ProductItem/ProductItem';
import { getProductFromFile } from '../utils/getProductFromFile';

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

beforeAll(() => {
  vi.mock('../utils/getProductFromFile');
});

afterAll(() => {
  vi.restoreAllMocks();
});

interface ProductsResponse {
  products: Product[];
}

describe('StatusMessage', () => {
  const mockFn = (getProductFromFile as Mock).mockReturnValue(Promise.resolve(fakeProducts));
  it('Test render status', async () => {
    const { result } = renderHook(useFetchProducts);
    await act(async () => {
      await mockFn().then(({ products: productsList }: ProductsResponse) => {
        result.current.setProducts([...productsList]);
      });
    });
    expect(result.current.products.length).toBe(2);
  });
});
