import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { FormCardItem } from './FormCardItem';

const fakeCards = [
  {
    firstName: 'First Name',
    lastName: 'Last Name',
    birthDate: '2022-01-01',
    country: 'russia',
    gender: 'male',
    imageFile: 'src',
    isPolicyAccept: true,
  },
  {
    firstName: 'First Name',
    lastName: 'Last Name',
    birthDate: '2022-01-01',
    country: 'russia',
    gender: 'male',
    imageFile: 'src',
    isPolicyAccept: false,
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
