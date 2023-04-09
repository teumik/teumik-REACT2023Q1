import { describe, it } from 'vitest';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useCustomFetch } from '../useCustomFetch';
import { mockResponse } from '../../__mocks__/response.mock';

describe('StatusMessage', () => {
  it('Test render status', async () => {
    const { result } = renderHook(useCustomFetch);
    await act(async () => {
      result.current.setItems([...mockResponse.results]);
    });
    await act(async () => {
      result.current.searchItems('query');
    });
    await act(async () => {
      result.current.searchItems('correct');
    });
    await act(async () => {
      result.current.setPaginationLink((state) => ({
        ...state,
        next: 'https://rickandmortyapi.com/api/character?page=3',
        prev: 'https://rickandmortyapi.com/api/character?page=1',
      }));
    });
    await act(async () => {
      result.current.nextPage();
    });
    await act(async () => {
      result.current.setPaginationLink((state) => ({
        ...state,
        next: 'https://rickandmortyapi.com/api/character?page=6',
        prev: 'https://rickandmortyapi.com/api/character?page=4',
      }));
    });
    await act(async () => {
      result.current.prevPage();
    });
    await act(async () => {
      result.current.setNotFoundMessage('message');
    });
    await act(async () => {
      result.current.totalReset('message');
    });
    await act(async () => {
      result.current.totalUpdate({ ...mockResponse });
    });
    await act(async () => {
      result.current.setCurrentPage('https://rickandmortyapi.com/api/character?page=3');
    });
    await act(async () => {
      result.current.setPages((state) => ({ ...state, current: null, next: null, prev: null }));
    });
    await act(async () => {
      result.current.setPages((state) => ({ ...state, current: 2, next: 3, prev: 1 }));
    });
  });
});
