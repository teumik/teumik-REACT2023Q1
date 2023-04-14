import { useCallback, useEffect, useState } from 'react';
import { paths } from '../routers/Paths';

function useTitlePage() {
  const [title, setTitle] = useState('');

  const titleCallback = useCallback(() => {
    const { pathname } = globalThis.location;
    setTitle(paths.getPath(pathname));
  }, []);

  useEffect(() => {
    titleCallback();
    globalThis.onpopstate = titleCallback;

    return () => {
      globalThis.onpopstate = null;
    };
  }, [titleCallback]);

  return { title, setTitle };
}

export { useTitlePage };
