import { describe, it } from 'vitest';
import { ReactPropTypes } from 'react';
import { FormCards } from './FormCards';

const fakeCard = {
  firstName: 'Name',
  lastName: 'Name',
  birthDate: '2022-02-02',
  country: 'russia',
  gender: 'male',
  imageFile: 'src',
  isPolicyAccept: true,
};

describe('FormCards', () => {
  it('Test render cards', () => {
    const instance = new FormCards({} as ReactPropTypes);
    instance.addCard(fakeCard);
    Object.assign(instance.state.cards, [fakeCard]);
    instance.render();
    expect(instance.state.cards.length).toEqual(1);
  });
});
