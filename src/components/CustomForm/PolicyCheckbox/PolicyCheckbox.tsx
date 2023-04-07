import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ErrorsProp, Register } from '../CustomForm';

interface Props extends Register, ErrorsProp {
  styleName: string;
}

function PolicyCheckbox({ styleName, register, errors }: Props) {
  return (
    <>
      <div className={styleName}>
        <input
          type="checkbox"
          id="agreement"
          {...register('agreement')}
        />
        <label htmlFor="agreement">I accept personal data processing</label>
      </div>
      {errors.agreement && (
        <>
          <span />
          <ErrorMessage message={errors.agreement.message} />
        </>
      )}
    </>
  );
}

export { PolicyCheckbox };
