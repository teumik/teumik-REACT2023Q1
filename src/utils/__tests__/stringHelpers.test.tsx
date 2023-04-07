import { describe, it } from 'vitest';
import { capitalize } from '../stringHelpers';
import { mock, result } from '../__mocks__/stringHelpers.mock';

describe('String helpers', () => {
  it('Test capitalize strings', () => {
    expect(capitalize(mock)).toEqual(result);
  });
  it('Test capitalize strings', () => {
    expect(capitalize()).toEqual('');
  });
});
