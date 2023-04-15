import { useDispatch } from 'react-redux';
import { ChangeEvent } from 'react';
import { capitalize } from '../../../utils/stringHelpers';
import { Register } from '../CustomForm';
import { formAction } from '../../../redux/slices/formSlice';

interface Props extends Register {
  gender: string;
}

function GenderField({ gender, register }: Props) {
  const dispatch = useDispatch();

  const genderRef = register('gender');
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    genderRef.onChange(event);
    dispatch(formAction.setValue({ gender: event.target.value }));
  };

  return (
    <label htmlFor={gender}>
      <input
        type="radio"
        id={gender}
        value={gender}
        {...genderRef}
        onChange={handler}
      />
      {capitalize(gender)}
    </label>
  );
}

export { GenderField };
