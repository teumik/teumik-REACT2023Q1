import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ErrorsProp, Register } from '../CustomForm';

interface CountrySelectProps extends Register, ErrorsProp {}

function CountrySelect({ register, errors }: CountrySelectProps) {
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
      {errors.country && (
        <>
          <span />
          <ErrorMessage message={errors.country.message} />
        </>
      )}
    </>
  );
}

export { CountrySelect };
