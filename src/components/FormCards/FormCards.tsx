import style from './formCards.module.scss';
import { FormCardItem } from '../FormCardItem/FormCardItem';
import { CustomForm } from '../CustomForm/CustomForm';
import { useTypedSelector } from '../../redux/hooks';

function FormCards() {
  const { cards } = useTypedSelector((state) => state.formCards);

  return (
    <>
      <CustomForm />
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
