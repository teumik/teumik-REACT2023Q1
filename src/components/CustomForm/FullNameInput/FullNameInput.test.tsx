import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { RefObject } from 'react';
import { FullNameInput } from './FullNameInput';

interface FakeProps {
  firstNameRef: RefObject<HTMLInputElement>;
  lastNameRef: RefObject<HTMLInputElement>;
  firstError: [boolean, string];
  lastError: [boolean, string];
}

const fakeProps: FakeProps = {
  firstNameRef: { current: null },
  lastNameRef: { current: null },
  firstError: [true, 'error message'],
  lastError: [true, 'error message'],
};

describe('FullNameInput', () => {
  it('Test render input field', () => {
    const { firstNameRef, lastNameRef, firstError, lastError } = fakeProps;
    render(
      <FullNameInput
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
        firstError={firstError}
        lastError={lastError}
      />
    );
    waitFor(() => {
      expect(screen.getAllByText(/error message/).length).toEqual(2);
    });
  });
});
