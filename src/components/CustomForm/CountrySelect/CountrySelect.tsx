import { ErrorsProp, Register } from '../CustomForm';
import { useFormErrorMessage } from '../../../hooks/useFormErrorMessage';

interface Props extends Register, ErrorsProp {}

function CountrySelect({ register, errors }: Props) {
  const { showErrorMessage } = useFormErrorMessage({ cells: 2 });

  return (
    <>
      <label htmlFor="country">Country:</label>
      <select
        defaultValue=""
        id="country"
        {...register('country')}
      >
        <option
          value=""
          disabled
        >
          Choose your country
        </option>
        <option value="belarus">Belarus</option>
        <option value="ukraine">Ukraine</option>
        <option value="russia">Russia</option>
      </select>
      {errors.country && showErrorMessage(errors.country.message)}
    </>
  );
}

export { CountrySelect };
