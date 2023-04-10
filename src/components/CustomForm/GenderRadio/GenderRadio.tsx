import { ErrorsProp, Register } from '../CustomForm';
import { useFormErrorMessage } from '../../../hooks/useFormErrorMessage';

interface Props extends Register, ErrorsProp {
  styleName: string;
}

function GenderRadio({ styleName, register, errors }: Props) {
  const { showErrorMessage } = useFormErrorMessage({ cells: 2 });

  return (
    <>
      <label htmlFor="gender">Gender:</label>
      <div className={styleName}>
        <label htmlFor="male">
          <input
            type="radio"
            id="male"
            value="male"
            {...register('gender')}
          />
          Male
        </label>
        <label htmlFor="female">
          <input
            type="radio"
            id="female"
            value="female"
            {...register('gender')}
          />
          Female
        </label>
        <label htmlFor="other">
          <input
            type="radio"
            id="other"
            value="other"
            {...register('gender')}
          />
          Other
        </label>
      </div>
      {errors.gender && showErrorMessage(errors.gender.message)}
    </>
  );
}

export { GenderRadio };
