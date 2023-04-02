import { useState } from 'react';
import { CardItem } from '../components/FormCardItem/FormCardItem';

const useAddCard = () => {
  const [cards, setCards] = useState<CardItem[]>([]);
  const addCard = (card: CardItem) => {
    setCards([...cards, { ...card }]);
  };
  return { cards, addCard };
};

export { useAddCard };
