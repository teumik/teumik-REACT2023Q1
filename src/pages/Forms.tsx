import { FormCards } from '../components/FormCards/FormCards';
import { useAddCard } from '../hooks/useAddCard';

function Forms() {
  const { cards, addCard } = useAddCard();

  return (
    <>
      <h1>Forms</h1>
      <FormCards
        addCard={addCard}
        cards={cards}
      />
    </>
  );
}

export { Forms };
