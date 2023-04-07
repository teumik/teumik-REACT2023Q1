import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ErrorsProp, Register } from '../CustomForm';

interface Props extends Register, ErrorsProp {}

function FullNameInput({ register, errors }: Props) {
  return (
    <>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        placeholder="John"
        {...register('firstName')}
      />
      {errors.firstName && (
        <>
          <span />
          <ErrorMessage message={errors.firstName.message} />
        </>
      )}
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        placeholder="Doe"
        {...register('lastName')}
      />
      {errors.lastName && (
        <>
          <span />
          <ErrorMessage message={errors.lastName.message} />
        </>
      )}
    </>
  );
}

export { FullNameInput };
