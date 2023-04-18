import { describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { ProductItemMore } from '../ProductItemMore';
import { store } from '../../../redux/store';
import { fetchItemById } from '../../../redux/slices/apiSlice';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe('ProductItemMore', () => {
  const handler = vi.fn();
  it('Test render product item open title', () => {
    render(
      <Provider store={store}>
        <ProductItemMore onClose={handler} />
      </Provider>
    );
  });
  it('Test render product item open title', async () => {
    await act(async () => {
      await store.dispatch(fetchItemById({ id: 2 }));
    });

    render(
      <Provider store={store}>
        <ProductItemMore onClose={handler} />
      </Provider>
    );
  });
});
