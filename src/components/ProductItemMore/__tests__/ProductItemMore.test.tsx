import { describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { mockResponse } from '../../../__mocks__/response.mock';
import { ProductItemMore } from '../ProductItemMore';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe('ProductItemMore', () => {
  const handler = vi.fn();
  it('Test render product item open title', () => {
    const [product] = mockResponse.results;
    render(
      <ProductItemMore
        product={product}
        onClose={handler}
      />
    );
  });
  it('Test render product item open title', () => {
    const [, product] = mockResponse.results;
    render(
      <ProductItemMore
        product={product}
        onClose={handler}
      />
    );
  });
});
