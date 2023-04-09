import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ProductItem } from '../ProductItem';
import { mockResponse } from '../../../__mocks__/response.mock';

beforeEach(() => {
  vi.useFakeTimers();
  vi.mock('../../utils/customFetch');
});

afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe('ProductItem', () => {
  const {
    results: [mock],
  } = mockResponse;
  it('Test render product item title', () => {
    render(<ProductItem product={mock} />);
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent(mock.name);
  });
  it('Test product animate function', async () => {
    render(<ProductItem product={mock} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('animate')).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByTestId('animate')).toBeInTheDocument();
  });
  it('Test product animate function', async () => {
    render(<ProductItem product={mock} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('overlay'));
    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('close')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('close'));
    expect(screen.queryByTestId('close')).not.toBeInTheDocument();
  });
  it('Test render product item price', () => {
    render(<ProductItem product={mock} />);
    fireEvent.click(screen.getByRole('button'));
  });
});
