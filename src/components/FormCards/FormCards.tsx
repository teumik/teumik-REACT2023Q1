import { useSelector } from 'react-redux';
import style from './formCards.module.scss';
import { FormCardItem } from '../FormCardItem/FormCardItem';
import { CustomForm } from '../CustomForm/CustomForm';
import { RootState } from '../../redux/store';
import { FormCardsState } from '../../redux/slices/formCardsSlice';

function FormCards() {
  const { cards } = useSelector<RootState, FormCardsState>((state) => state.formCards);

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
