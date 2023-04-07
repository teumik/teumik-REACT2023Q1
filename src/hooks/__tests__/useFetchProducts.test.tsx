import { Mock, describe, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useFetchProducts } from '../useFetchProducts';
import { Product } from '../../components/ProductItem/ProductItem';
import { customFetch } from '../../utils/customFetch';
import { mockResponse } from '../../__mocks__/response.mock';

beforeAll(() => {
  vi.mock('../../utils/customFetch');
});

afterAll(() => {
  vi.restoreAllMocks();
});

interface ProductsResponse {
  products: Product[];
}

describe('StatusMessage', () => {
  const mockFn = (customFetch as Mock).mockReturnValue(Promise.resolve(mockResponse));
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
