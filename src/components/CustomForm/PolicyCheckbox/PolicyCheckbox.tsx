import { ErrorsProp, Register } from '../CustomForm';
import { useFormErrorMessage } from '../../../hooks/useFormErrorMessage';

interface Props extends Register, ErrorsProp {
  styleName: string;
}

function PolicyCheckbox({ styleName, register, errors }: Props) {
  const { showErrorMessage } = useFormErrorMessage({ cells: 2 });

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
      {errors.agreement && showErrorMessage(errors.agreement.message)}
    </>
  );
}

export { PolicyCheckbox };
