import { Component, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

interface GenderRadioProps {
  styleName: string;
  genderRef: RefObject<HTMLDivElement>;
  error: [boolean, string];
}

class GenderRadio extends Component<GenderRadioProps> {
  render() {
    const {
      styleName,
      genderRef,
      error: [isError, errorMessage],
    } = this.props;
    return (
      <>
        <label htmlFor="gender">Gender:</label>
        <div
          className={styleName}
          ref={genderRef}
        >
          <div>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
            />
            <label htmlFor="other">Other</label>
          </div>
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

export { GenderRadio };
