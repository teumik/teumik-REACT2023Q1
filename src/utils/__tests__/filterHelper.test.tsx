import { describe, it } from 'vitest';
import { filter } from '../filterHelper';
import { mockResponse } from '../../__mocks__/response.mock';

describe('filter', () => {
  it('Test render products', () => {
    const {
      products: [product],
    } = mockResponse;
    expect(filter(product, '')).toEqual(true);
    expect(filter(product, 'book')).toEqual(true);
    expect(filter(product, 'Who Lived')).toEqual(true);
    expect(filter(product, '999')).toEqual(null);
    expect(filter(product, 'http://')).toEqual(null);
    expect(filter(product, '8888')).toEqual(true);
    expect(filter(product, '77777')).toEqual(true);
    expect(filter(product, '4.9')).toEqual(true);
    expect(filter(product, 'Harry Potter')).toEqual(true);
  });
});
