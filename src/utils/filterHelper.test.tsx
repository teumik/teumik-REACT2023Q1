import { describe, it } from 'vitest';
import { filter } from './filterHelper';
import { Product } from '../components/ProductItem/ProductItem';

const fakeProducts: Product[] = [
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
];

describe('filter', () => {
  it('Test render products', () => {
    const [product] = fakeProducts;
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
