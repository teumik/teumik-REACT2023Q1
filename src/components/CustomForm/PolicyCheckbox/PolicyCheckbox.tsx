import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';
import { ErrorsProp, Register } from '../CustomForm';
import { useFormErrorMessage } from '../../../hooks/useFormErrorMessage';
import { formAction } from '../../../redux/slices/formSlice';

interface Props extends Register, ErrorsProp {
  styleName: string;
}

function PolicyCheckbox({ styleName, register, errors }: Props) {
  const { showErrorMessage } = useFormErrorMessage({ cells: 2 });
  const dispatch = useDispatch();

  const agreementRef = register('agreement');
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    agreementRef.onChange(event);
    dispatch(formAction.setValue({ agreement: event.target.checked }));
  };

  return (
    <>
      <div className={styleName}>
        <input
          type="checkbox"
          id="agreement"
          {...agreementRef}
          onChange={handler}
        />
        <label htmlFor="agreement">I accept personal data processing</label>
      </div>
      {errors.agreement && showErrorMessage(errors.agreement.message)}
    </>
  );
}

export { PolicyCheckbox };
