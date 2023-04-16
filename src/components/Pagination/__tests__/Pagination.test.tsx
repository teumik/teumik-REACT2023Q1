import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { store } from '../../../redux/store';
import { fetchItems } from '../../../redux/slices/apiSlice';
import { Pagination } from '../Pagination';
import { paths } from '../../../routers/Paths';

describe('Pagination', () => {
  it('Test render pagination', async () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );

    await act(async () => {
      await store.dispatch(fetchItems({ path: `${paths.serverUrl}` }));
    });
    await act(async () => {
      fireEvent.click(screen.getAllByRole('button')[1]);
    });
    await act(async () => {
      fireEvent.click(screen.getAllByRole('button')[0]);
    });

    await act(async () => {
      await store.dispatch(fetchItems({ path: `${paths.serverUrl}` }));
    });
    await act(async () => {
      fireEvent.click(screen.getAllByRole('button')[0]);
    });
  });
});
