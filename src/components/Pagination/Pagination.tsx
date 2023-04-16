import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import { apiAction, fetchItems } from '../../redux/slices/apiSlice';
import style from './Pagination.module.scss';

function Pagination() {
  const {
    info: { prev, next, pages, current },
  } = useTypedSelector((state) => state.api);
  const dispatch = useTypedDispatch();

  const getCurrent = () => {
    const [match] = current?.match(/(?<=page=)\d+/gi) || [1];
    const page = Number(match);
    return page;
  };

  const nextPage = () => {
    if (!next) return;
    dispatch(apiAction.setCurrentPage(next));
    dispatch(fetchItems({ path: next }));
  };

  const prevPage = () => {
    if (!prev) return;
    dispatch(apiAction.setCurrentPage(prev));
    dispatch(fetchItems({ path: prev }));
  };

  return (
    <div className={style.pagination}>
      <button
        type="button"
        disabled={!prev}
        onClick={prevPage}
      >
        Prev
      </button>
      <section>
        <span>{getCurrent()}</span>/<span>{pages}</span>
      </section>
      <button
        type="button"
        disabled={!next}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
}

export { Pagination };
