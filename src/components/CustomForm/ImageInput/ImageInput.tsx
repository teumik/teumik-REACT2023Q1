import { Component, RefObject } from 'react';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

interface ImageInputProps {
  styleName: string;
  imageRef: RefObject<HTMLInputElement>;
  error: [boolean, string];
}

class ImageInput extends Component<ImageInputProps> {
  render() {
    const {
      styleName,
      imageRef,
      error: [isError, errorMessage],
    } = this.props;
    return (
      <div className={styleName}>
        <input type="file" name="image" ref={imageRef} />
        {isError && <ErrorMessage message={errorMessage} />}
      </div>
    );
  }
}

export { ImageInput };
