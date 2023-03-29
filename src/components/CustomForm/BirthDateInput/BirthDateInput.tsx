import { Component, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

interface BirthDateInputProps {
  birthDateRef: RefObject<HTMLInputElement>;
  error: [boolean, string];
}

class BirthDateInput extends Component<BirthDateInputProps> {
  render() {
    const {
      birthDateRef,
      error: [isError, errorMessage],
    } = this.props;

    return (
      <>
        <label htmlFor="date">Birth Date:</label>
        <input
          type="date"
          name="date"
          id="date"
          ref={birthDateRef}
          data-testid="date"
        />
        {isError && (
          <>
            <span />
            <ErrorMessage message={errorMessage} />
          </>
        )}
      </>
    );
  }
}

export { BirthDateInput };
