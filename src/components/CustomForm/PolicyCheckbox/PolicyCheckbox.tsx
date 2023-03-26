import { Component, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

interface PolicyCheckboxProps {
  styleName: string;
  policyRef: RefObject<HTMLInputElement>;
  error: [boolean, string];
}

class PolicyCheckbox extends Component<PolicyCheckboxProps> {
  render() {
    const {
      styleName,
      policyRef,
      error: [isError, errorMessage],
    } = this.props;
    return (
      <>
        <div className={styleName}>
          <input type="checkbox" name="agreement" id="agreement" ref={policyRef} />
          <label htmlFor="agreement">I accept personal data processing</label>
        </div>
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

export { PolicyCheckbox };
