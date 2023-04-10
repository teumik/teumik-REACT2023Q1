import { Pages } from '../../hooks/useCustomFetch';
import style from './Pagination.module.scss';

interface Props {
  pages: Pages;
  pagesCount: number | undefined;
  prevPage: () => void;
  nextPage: () => void;
}

function Pagination({ pages, pagesCount, prevPage, nextPage }: Props) {
  return (
    <div className={style.pagination}>
      <button
        type="button"
        disabled={!pages.prev && true}
        onClick={prevPage}
      >
        Prev
      </button>
      <section>
        <span>{pages.current}</span>/<span>{pagesCount}</span>
      </section>
      <button
        type="button"
        disabled={!pages.next && true}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
}

export { Pagination };
