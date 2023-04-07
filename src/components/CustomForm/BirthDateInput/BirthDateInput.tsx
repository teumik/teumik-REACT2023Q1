import { useFormErrorMessage } from '../../../hooks/useFormErrorMessage';
import { ErrorsProp, Register } from '../CustomForm';

interface Props extends Register, ErrorsProp {}

function BirthDateInput({ register, errors }: Props) {
  const { showErrorMessage } = useFormErrorMessage({ cells: 2 });

  return (
    <>
      <label htmlFor="date">Birth Date:</label>
      <input
        type="date"
        id="date"
        data-testid="date"
        {...register('date')}
      />
      {errors.date && showErrorMessage(errors.date.message)}
    </>
  );
}

export { BirthDateInput };
