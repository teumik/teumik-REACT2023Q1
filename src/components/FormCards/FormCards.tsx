import { Component, ReactPropTypes } from 'react';
import style from './formCards.module.scss';
import { CardItem, FormCardItem } from '../FormCardItem/FormCardItem';
import { CustomForm } from '../CustomForm/CustomForm';

interface FormCardsState {
  cards: CardItem[];
}

class FormCards extends Component<Partial<ReactPropTypes>, FormCardsState> {
  constructor(props: ReactPropTypes) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  addCard = (card: CardItem) => {
    this.setState((state) => ({
      ...state,
      cards: [...state.cards, { ...card }],
    }));
  };

  render() {
    const { cards } = this.state;
    return (
      <>
        <CustomForm addCard={this.addCard} />
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
}

export { FormCards };
