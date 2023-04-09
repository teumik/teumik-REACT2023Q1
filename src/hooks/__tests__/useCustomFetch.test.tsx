import { Mock, describe, it, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { FetchResponse, useCustomFetch } from '../useCustomFetch';
import { customFetch } from '../../utils/customFetch';
import { mockResponse } from '../../__mocks__/response.mock';

beforeAll(() => {
  vi.mock('../../utils/customFetch');
});

afterAll(() => {
  vi.restoreAllMocks();
});

describe('StatusMessage', () => {
  const mockFn = (customFetch as Mock).mockReturnValue(Promise.resolve(mockResponse));
  it('Test render status', async () => {
    const { result } = renderHook(useCustomFetch);
    await act(async () => {
      await mockFn().then(({ results }: FetchResponse) => {
        result.current.setItems([...results]);
      });
    });
    await act(async () => {
      await mockFn().then(() => {
        result.current.searchItems('query');
      });
    });
    expect(result.current.items.length).toBe(2);
  });
});
