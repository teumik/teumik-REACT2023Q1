import { Mock, describe, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useFetchProducts } from '../useFetchProducts';
import { Product } from '../../components/ProductItem/ProductItem';
import { getProductFromFile } from '../../utils/getProductFromFile';
import { mockResponse } from '../../__mocks__/response.mock';

beforeAll(() => {
  vi.mock('../../utils/getProductFromFile');
});

afterAll(() => {
  vi.restoreAllMocks();
});

interface ProductsResponse {
  products: Product[];
}

describe('StatusMessage', () => {
  const mockFn = (getProductFromFile as Mock).mockReturnValue(Promise.resolve(mockResponse));
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
