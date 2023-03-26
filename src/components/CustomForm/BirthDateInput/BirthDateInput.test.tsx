import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { RefObject } from 'react';
import { BirthDateInput } from './BirthDateInput';

interface FakeProps {
  birthDateRef: RefObject<HTMLInputElement>;
  error: [boolean, string];
}

const fakeProps: FakeProps = {
  birthDateRef: { current: null },
  error: [true, 'error message'],
};

describe('BirthDateInput', () => {
  it('Test render input field', () => {
    const { birthDateRef, error } = fakeProps;
    render(
      <BirthDateInput
        birthDateRef={birthDateRef}
        error={error}
      />
    );
    waitFor(() => {
      expect(screen.getAllByText(/error message/)).toBeInTheDocument();
    });
  });
});
