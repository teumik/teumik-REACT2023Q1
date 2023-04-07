import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductItem } from '../ProductItem';
import { mockResponse } from '../../../__mocks__/response.mock';

describe('ProductItem', () => {
  const {
    products: [mock],
  } = mockResponse;
  it('Test render product item title', () => {
    render(<ProductItem product={mock} />);
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent(mock.title);
  });
  it('Test render product item price', () => {
    render(<ProductItem product={mock} />);
    expect(
      screen.getByRole('heading', {
        level: 4,
      })
    ).toHaveTextContent(String(mock.price));
  });
  it('Test render product item category', () => {
    render(<ProductItem product={mock} />);
    expect(screen.getByText(mock.category)).toBeInTheDocument();
  });
  it('Test render product item description', () => {
    render(<ProductItem product={mock} />);
    expect(screen.getByText(mock.description)).toBeInTheDocument();
  });
  it('Test render product item count', () => {
    render(<ProductItem product={mock} />);
    expect(screen.getByText(mock.rating.count)).toBeInTheDocument();
  });
  it('Test render product item rate', () => {
    render(<ProductItem product={mock} />);
    expect(screen.getByText(mock.rating.rate)).toBeInTheDocument();
  });
  it('Test render product item image', () => {
    render(<ProductItem product={mock} />);
    expect(screen.getByAltText(mock.title)).toBeInTheDocument();
  });
});
