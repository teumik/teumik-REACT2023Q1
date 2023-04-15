import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Forms } from '../Forms';
import { store } from '../../redux/store';

describe('Forms', () => {
  it('Test render NotFound', () => {
    render(
      <Provider store={store}>
        <Forms />
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Forms');
  });
});
