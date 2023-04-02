import style from './formCards.module.scss';
import { CardItem, FormCardItem } from '../FormCardItem/FormCardItem';
import { CustomForm } from '../CustomForm/CustomForm';

interface FormCardsProps {
  addCard: (card: CardItem) => void;
  cards: CardItem[];
}

function FormCards({ addCard, cards }: FormCardsProps) {
  return (
    <>
      <CustomForm addCard={addCard} />
      <section
        className={style['cards-container']}
        data-testid="cards-container"
      >
        {cards.map((card) => (
          <FormCardItem
            key={Math.random()}
            cardData={card}
          />
        ))}
      </section>
    </>
  );
}

export { FormCards };
