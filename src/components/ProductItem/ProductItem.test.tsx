import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductItem } from './ProductItem';

const fakeProduct = {
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
};

describe('ProductItem', () => {
  it('Test render product item title', () => {
    render(<ProductItem product={fakeProduct} />);
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent(fakeProduct.title);
  });
  it('Test render product item price', () => {
    render(<ProductItem product={fakeProduct} />);
    expect(
      screen.getByRole('heading', {
        level: 4,
      })
    ).toHaveTextContent(String(fakeProduct.price));
  });
  it('Test render product item category', () => {
    render(<ProductItem product={fakeProduct} />);
    expect(screen.getByText(fakeProduct.category)).toBeInTheDocument();
  });
  it('Test render product item description', () => {
    render(<ProductItem product={fakeProduct} />);
    expect(screen.getByText(fakeProduct.description)).toBeInTheDocument();
  });
  it('Test render product item count', () => {
    render(<ProductItem product={fakeProduct} />);
    expect(screen.getByText(fakeProduct.rating.count)).toBeInTheDocument();
  });
  it('Test render product item rate', () => {
    render(<ProductItem product={fakeProduct} />);
    expect(screen.getByText(fakeProduct.rating.rate)).toBeInTheDocument();
  });
  it('Test render product item image', () => {
    render(<ProductItem product={fakeProduct} />);
    expect(screen.getByAltText(fakeProduct.title)).toBeInTheDocument();
  });
});
