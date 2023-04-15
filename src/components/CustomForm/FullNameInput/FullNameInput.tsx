import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorsProp, Register } from '../CustomForm';
import { useFormErrorMessage } from '../../../hooks/useFormErrorMessage';
import { formAction } from '../../../redux/slices/formSlice';

interface Props extends Register, ErrorsProp {}

function FullNameInput({ register, errors }: Props) {
  const { showErrorMessage } = useFormErrorMessage({ cells: 2 });
  const dispatch = useDispatch();

  const firstNameRef = register('firstName');
  const firstNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    firstNameRef.onChange(event);
    dispatch(formAction.setValue({ firstName: event.target.value }));
  };
  const lastNameRef = register('lastName');
  const lastNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    lastNameRef.onChange(event);
    dispatch(formAction.setValue({ lastName: event.target.value }));
  };

  return (
    <>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        placeholder="John"
        {...firstNameRef}
        onChange={firstNameHandler}
      />
      {errors.firstName && showErrorMessage(errors.firstName.message)}
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        placeholder="Doe"
        {...lastNameRef}
        onChange={lastNameHandler}
      />
      {errors.lastName && showErrorMessage(errors.lastName.message)}
    </>
  );
}

export { FullNameInput };
