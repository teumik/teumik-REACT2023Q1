import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { ProductItem } from '../ProductItem';
import { mockResponse } from '../../../__mocks__/response.mock';
import { Modal } from '../../Modal/Modal';
import { ProductItemMore } from '../../ProductItemMore/ProductItemMore';

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe('ProductItem', () => {
  const { results } = mockResponse;
  const [mock] = results;
  it('Test render product item title', () => {
    render(<ProductItem product={mock} />);
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent(mock.name);
  });
  it('Test product animate function', () => {
    render(<ProductItem product={mock} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('animate')).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByTestId('animate')).toBeInTheDocument();
    act(() => {
      vi.runAllTimers();
    });
    expect(screen.queryByTestId('animate')).not.toBeInTheDocument();
  });
  it('Test product overlay and modal', () => {
    render(<ProductItem product={mock} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('overlay'));
    expect(screen.queryByTestId('overlay')).not.toBeInTheDocument();
  });
  it('Test product popup close', async () => {
    await act(async () => {
      render(<ProductItem product={mock} />);
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
  });
  it('Test render modal', async () => {
    const handler = vi.fn();
    await act(async () => {
      render(
        <Modal
          isPending={false}
          showModal
          onClose={handler}
        >
          <ProductItemMore
            item={mock}
            onClose={handler}
          />
        </Modal>
      );
    });
  });
});
