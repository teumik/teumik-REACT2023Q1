import { Component, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

interface CountrySelectProps {
  countryRef: RefObject<HTMLSelectElement>;
  error: [boolean, string];
}

class CountrySelect extends Component<CountrySelectProps> {
  render() {
    const {
      countryRef,
      error: [isError, errorMessage],
    } = this.props;
    return (
      <>
        <label htmlFor="country">Country:</label>
        <select defaultValue="" name="country" id="country" ref={countryRef}>
          <option value="" disabled>
            Choose your country
          </option>
          <option value="belarus">Belarus</option>
          <option value="ukraine">Ukraine</option>
          <option value="russia">Russia</option>
        </select>
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

export { CountrySelect };
