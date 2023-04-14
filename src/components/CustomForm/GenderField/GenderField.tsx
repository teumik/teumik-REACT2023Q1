import { capitalize } from '../../../utils/stringHelpers';
import { Register } from '../CustomForm';

interface Props extends Register {
  gender: string;
}

function GenderField({ gender, register }: Props) {
  return (
    <label htmlFor={gender}>
      <input
        type="radio"
        id={gender}
        value={gender}
        {...register('gender')}
      />
      {capitalize(gender)}
    </label>
  );
}

export { GenderField };
