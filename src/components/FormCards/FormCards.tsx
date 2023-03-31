import style from './formCards.module.scss';
import { FormCardItem } from '../FormCardItem/FormCardItem';
import { CustomForm } from '../CustomForm/CustomForm';
import { useAddCard } from '../../hooks/useAddCard';

function FormCards() {
  const { cards, addCard } = useAddCard();

  return (
    <>
      <CustomForm addCard={addCard} />
      <section className={style['cards-container']}>
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
