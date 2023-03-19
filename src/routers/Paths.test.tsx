import { describe, it, vi } from 'vitest';
import { paths } from './Paths';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Products', () => {
  it('Test render products', () => {
    const spy = vi.spyOn(paths, 'get');
    const home = paths.get('/');
    const notFound = paths.get('');
    expect(spy).toHaveBeenCalled();
    expect(home).toEqual('Home');
    expect(notFound).toEqual('');
  });
});
