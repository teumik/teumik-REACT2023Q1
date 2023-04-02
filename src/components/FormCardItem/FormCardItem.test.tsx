import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { FormCardItem } from './FormCardItem';

const fakeCards = [
  {
    firstName: 'First Name',
    lastName: 'Last Name',
    date: '2022-01-01',
    country: 'russia',
    gender: 'male',
    image: 'src',
    agreement: true,
  },
  {
    firstName: 'First Name',
    lastName: 'Last Name',
    date: '2022-01-01',
    country: 'russia',
    gender: 'male',
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
