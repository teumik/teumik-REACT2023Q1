import { describe, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useAddCard } from './useAddCard';
import { CardItem } from '../components/FormCardItem/FormCardItem';

const fakeCard: CardItem = {
  firstName: 'Name',
  lastName: 'Name',
  date: '2022-02-02',
  country: 'russia',
  gender: 'male',
  image: 'src',
  agreement: true,
};

describe('useAddCard', () => {
  it('Test addCard', async () => {
    const { result } = renderHook(useAddCard);
    act(() => {
      result.current.addCard({ ...fakeCard });
    });
    const [card] = result.current.cards;
    Object.entries(card).forEach(([key, value]) => {
      expect(value).toEqual(fakeCard[key as keyof CardItem]);
    });
  });
});
