import { describe, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Modal } from '../Modal';

describe('Modal', () => {
  const handler = vi.fn();
  it('Test render Modal', async () => {
    render(
      <Modal
        isPending
        showModal
        onClose={handler}
      />
    );
  });
  it('Test render Modal', async () => {
    render(
      <Modal
        isPending={false}
        showModal={false}
        onClose={handler}
      />
    );
  });
  it('Test render Modal', async () => {
    render(
      <Modal
        isPending={false}
        showModal
        onClose={handler}
      />
    );
  });
  it('Test render Modal', async () => {
    render(
      <Modal
        isPending
        showModal={false}
        onClose={handler}
      />
    );
  });
});
