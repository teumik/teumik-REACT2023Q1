import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { FormCardItem } from './FormCardItem';

const fakeCards = [
  {
    id: 1,
    firstName: 'First Name',
    lastName: 'Last Name',
    date: '2022-01-01',
    country: 'russia',
    gender: 'male',
    image: 'src',
    agreement: true,
  },
  {
    id: 2,
    firstName: 'First Name',
    lastName: 'Last Name',
    date: '2022-01-01',
    country: 'russia',
    gender: null,
    image: 'src',
    agreement: false,
  },
];

describe('FormCardItem', () => {
  it('Test render card', () => {
    fakeCards.forEach((card) => {
      render(<FormCardItem cardData={card} />);
      waitFor(() => {
        expect(screen.getAllByText(/Last Name/)).toBeInTheDocument();
      });
    });
  });
});
