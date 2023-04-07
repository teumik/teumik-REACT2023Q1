import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ErrorsProp, Register } from '../CustomForm';

interface Props extends Register, ErrorsProp {
  styleName: string;
}

function ImageInput({ styleName, register, errors }: Props) {
  return (
    <div className={styleName}>
      <input
        type="file"
        data-testid="file"
        {...register('image')}
      />
      {errors.image && <ErrorMessage message={errors.image.message} />}
    </div>
  );
}

export { ImageInput };
