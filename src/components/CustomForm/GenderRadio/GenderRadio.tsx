import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ErrorsProp, Register } from '../CustomForm';

interface Props extends Register, ErrorsProp {
  styleName: string;
}

function GenderRadio({ styleName, register, errors }: Props) {
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
      {errors.gender && (
        <>
          <span />
          <ErrorMessage message={errors.gender.message} />
        </>
      )}
    </>
  );
}

export { GenderRadio };
