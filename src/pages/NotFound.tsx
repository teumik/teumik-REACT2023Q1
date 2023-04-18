import { BackButton } from '../components/BackButton/BackButton';

function NotFound() {
  return (
    <>
      <div>
        <BackButton />
      </div>
      <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </div>
    </>
  );
}

export { NotFound };
