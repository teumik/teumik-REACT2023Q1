import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { RefObject } from 'react';
import { CountrySelect } from './CountrySelect';

interface FakeProps {
  countryRef: RefObject<HTMLSelectElement>;
  error: [boolean, string];
}

const fakeProps: FakeProps = {
  countryRef: { current: null },
  error: [true, 'error message'],
};

describe('CountrySelect', () => {
  it('Test render input field', () => {
    const { countryRef, error } = fakeProps;
    render(
      <CountrySelect
        countryRef={countryRef}
        error={error}
      />
    );
    waitFor(() => {
      expect(screen.getAllByText(/error message/)).toBeInTheDocument();
    });
  });
});
