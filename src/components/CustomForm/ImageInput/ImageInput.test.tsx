import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { RefObject } from 'react';
import { ImageInput } from './ImageInput';

interface FakeProps {
  styleName: string;
  imageRef: RefObject<HTMLInputElement>;
  error: [boolean, string];
}

const fakeProps: FakeProps = {
  styleName: 'style',
  imageRef: { current: null },
  error: [true, 'error message'],
};

describe('ImageInput', () => {
  it('Test render input field', () => {
    const { styleName, imageRef, error } = fakeProps;
    render(
      <ImageInput
        styleName={styleName}
        imageRef={imageRef}
        error={error}
      />
    );
    waitFor(() => {
      expect(screen.getAllByText(/error message/)).toBeInTheDocument();
    });
  });
});
