import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { RefObject } from 'react';
import { GenderRadio } from './GenderRadio';

interface FakeProps {
  styleName: string;
  genderRef: RefObject<HTMLInputElement>;
  error: [boolean, string];
}

const fakeProps: FakeProps = {
  styleName: 'style',
  genderRef: { current: null },
  error: [true, 'error message'],
};

describe('GenderRadio', () => {
  it('Test render input field', () => {
    const { styleName, genderRef, error } = fakeProps;
    render(
      <GenderRadio
        styleName={styleName}
        genderRef={genderRef}
        error={error}
      />
    );
    waitFor(() => {
      expect(screen.getAllByText(/error message/)).toBeInTheDocument();
    });
  });
});
