import style from './formCards.module.scss';
import { CardItem, FormCardItem } from '../FormCardItem/FormCardItem';
import { CustomForm } from '../CustomForm/CustomForm';
import { AddCardMethod } from '../../hooks/useAddCard';

interface FormCardsProps {
  addCard: AddCardMethod;
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
            key={card.id}
            cardData={card}
          />
        ))}
      </section>
    </>
  );
}

export { FormCards };
