import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import { FormCards } from '../FormCards';
import { mockCards } from '../../../__mocks__/cards.mock';
import { store } from '../../../redux/store';
import { formCardsAction } from '../../../redux/slices/formCardsSlice';

describe('FormCards', () => {
  it('Test render cards', async () => {
    const [card] = mockCards;
    act(() => {
      store.dispatch(formCardsAction.addCard({ card }));
    });
    render(
      <Provider store={store}>
        <FormCards />
      </Provider>
    );
    expect(screen.getByText(new RegExp(`${card.firstName}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${card.lastName}`, 'i'))).toBeInTheDocument();
  });
});
