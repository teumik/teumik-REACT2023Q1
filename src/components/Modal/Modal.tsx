import { createPortal } from 'react-dom';
import { PropsWithChildren } from 'react';
import style from './Modal.module.scss';
import { Preloader } from '../Preloader/Preloader';

interface Props extends PropsWithChildren {
  isPending: boolean;
  showModal: boolean;
  onClose: () => void;
}

function Modal({ isPending, showModal, onClose, children }: Props) {
  if (!showModal) {
    return null;
  }

  return createPortal(
    <>
      <button
        type="button"
        className={style.overlay}
        onClick={onClose}
        data-testid="overlay"
      />
      <div className={style.modal}>
        {isPending && <Preloader />}
        {!isPending && children}
      </div>
    </>,
    document.body
  );
}

export { Modal };
