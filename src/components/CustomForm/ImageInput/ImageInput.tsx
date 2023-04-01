import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { ErrorsProp, Register } from '../CustomForm';

interface ImageInputProps extends Register, ErrorsProp {
  styleName: string;
}

function ImageInput({ styleName, register, errors }: ImageInputProps) {
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
