import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FormCards } from './FormCards';
import { CardItem } from '../FormCardItem/FormCardItem';

const fakeCard: CardItem = {
  id: 1,
  firstName: 'Name-test-value',
  lastName: 'Surname-test-value',
  date: '2022-02-02-test-value',
  country: 'russia-test-value',
  gender: 'male-test-value',
  image: 'src-test-value',
  agreement: true,
};

describe('FormCards', () => {
  it('Test render cards', async () => {
    const handle = vi.fn();
    render(
      <FormCards
        addCard={handle}
        cards={[fakeCard]}
      />
    );
    expect(screen.getByText(/Name-test-value/i)).toBeInTheDocument();
    expect(screen.getByText(/Surname-test-value/i)).toBeInTheDocument();
  });
});
