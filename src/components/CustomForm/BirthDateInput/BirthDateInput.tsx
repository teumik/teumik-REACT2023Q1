import { ErrorsProp, Register } from '../CustomForm';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

interface Props extends Register, ErrorsProp {}

function BirthDateInput({ register, errors }: Props) {
  return (
    <>
      <label htmlFor="date">Birth Date:</label>
      <input
        type="date"
        id="date"
        data-testid="date"
        {...register('date')}
      />
      {errors.date && (
        <>
          <span />
          <ErrorMessage message={errors.date.message} />
        </>
      )}
    </>
  );
}

export { BirthDateInput };
