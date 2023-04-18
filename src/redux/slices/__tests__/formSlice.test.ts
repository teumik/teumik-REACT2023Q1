import { describe, it } from 'vitest';
import { act } from 'react-dom/test-utils';
import { store } from '../../store';
import { formAction } from '../formSlice';

describe('formSlice', () => {
  it('Test implementation form slice', async () => {
    act(() => {
      store.dispatch(formAction.setValue({ fields: { firstName: 'Name' } }));
    });
    act(() => {
      store.dispatch(formAction.setValue({ fields: { firstName: '' } }));
    });
  });
});
