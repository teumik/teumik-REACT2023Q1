import { Component, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

interface FullNameInputProps {
  firstNameRef: RefObject<HTMLInputElement>;
  lastNameRef: RefObject<HTMLInputElement>;
  firstError: [boolean, string];
  lastError: [boolean, string];
}

class FullNameInput extends Component<FullNameInputProps> {
  render() {
    const {
      firstNameRef,
      lastNameRef,
      firstError: [isErrorFirst, errorMessageFirst],
      lastError: [isErrorLast, errorMessageLast],
    } = this.props;
    return (
      <>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" id="firstName" placeholder="John" ref={firstNameRef} />
        {isErrorFirst && (
          <>
            <span />
            <ErrorMessage message={errorMessageFirst} />
          </>
        )}
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" id="lastName" placeholder="Doe" ref={lastNameRef} />
        {isErrorLast && (
          <>
            <span />
            <ErrorMessage message={errorMessageLast} />
          </>
        )}
      </>
    );
  }
}

export { FullNameInput };
