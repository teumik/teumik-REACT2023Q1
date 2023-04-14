import style from './errorMessage.module.scss';

interface ErrorMessageProps {
  message: string | undefined;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      className={style.error}
      data-testid="message"
    >
      {message || null}
    </div>
  );
}

export { ErrorMessage };
