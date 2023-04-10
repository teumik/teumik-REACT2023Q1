import { ErrorMessage } from '../components/CustomForm/ErrorMessage/ErrorMessage';

const useFormErrorMessage = ({ cells }: { cells: number }) => {
  const showErrorMessage = (message?: string) => (
    <>
      {cells === 2 && <span />}
      <ErrorMessage message={message} />
    </>
  );

  return { showErrorMessage };
};

export { useFormErrorMessage };
