import { describe, it } from 'vitest';
import { act } from 'react-dom/test-utils';
import { store } from '../../store';
import { fetchItemById } from '../apiSlice';

describe('apiSlice', () => {
  it('Test implementation api slice', async () => {
    await act(async () => {
      await store.dispatch(fetchItemById({ id: 3 }));
    });
    expect(store.getState().api.modal.error).toEqual('WRONG ID');
  });
});
