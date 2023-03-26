import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { RefObject } from 'react';
import { PolicyCheckbox } from './PolicyCheckbox';

interface FakeProps {
  styleName: string;
  policyRef: RefObject<HTMLInputElement>;
  error: [boolean, string];
}

const fakeProps: FakeProps = {
  styleName: 'style',
  policyRef: { current: null },
  error: [true, 'error message'],
};

describe('PolicyCheckbox', () => {
  it('Test render input field', () => {
    const { styleName, policyRef, error } = fakeProps;
    render(
      <PolicyCheckbox
        styleName={styleName}
        policyRef={policyRef}
        error={error}
      />
    );
    waitFor(() => {
      expect(screen.getAllByText(/error message/)).toBeInTheDocument();
    });
  });
});
