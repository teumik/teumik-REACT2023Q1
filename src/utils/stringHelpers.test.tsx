import { describe, it } from 'vitest';
import { capitalize } from './stringHelpers';

const mock = 'asd';
const expectResult = 'Asd';

describe('String helpers', () => {
  it('Test capitalize strings', () => {
    expect(capitalize(mock)).toEqual(expectResult);
  });
  it('Test capitalize strings', () => {
    expect(capitalize()).toEqual('');
  });
});
