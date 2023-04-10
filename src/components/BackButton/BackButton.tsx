import style from './backButton.module.scss';

function BackButton() {
  return (
    <button
      type="button"
      className={style.button}
      onClick={() => globalThis.history.back()}
    >
      Back
    </button>
  );
}

export { BackButton };
