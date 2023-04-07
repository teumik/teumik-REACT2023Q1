import { ErrorsProp, Register } from '../CustomForm';
import { useFormErrorMessage } from '../../../hooks/useFormErrorMessage';

interface Props extends Register, ErrorsProp {}

function FullNameInput({ register, errors }: Props) {
  const { showErrorMessage } = useFormErrorMessage({ cells: 2 });

  return (
    <>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        placeholder="John"
        {...register('firstName')}
      />
      {errors.firstName && showErrorMessage(errors.firstName.message)}
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        placeholder="Doe"
        {...register('lastName')}
      />
      {errors.lastName && showErrorMessage(errors.lastName.message)}
    </>
  );
}

export { FullNameInput };
