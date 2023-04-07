import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormCards } from '../FormCards';
import { mockCards } from '../../../__mocks__/cards.mock';

describe('FormCards', () => {
  it('Test render cards', async () => {
    const handle = vi.fn();
    const [card] = mockCards;
    render(
      <FormCards
        addCard={handle}
        cards={[card]}
      />
    );
    expect(screen.getByText(new RegExp(`${card.firstName}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${card.lastName}`, 'i'))).toBeInTheDocument();
  });
});
