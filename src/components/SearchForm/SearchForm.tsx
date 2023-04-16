import { ChangeEvent, FormEvent } from 'react';
import { SearchLogo } from '../SearchLogo/SearchLogo';
import style from './searchForm.module.scss';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import { fetchItems, apiAction } from '../../redux/slices/apiSlice';

function SearchForm() {
  const dispatch = useTypedDispatch();
  const { query } = useTypedSelector((state) => state.api);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(apiAction.resetCurrent());
    dispatch(fetchItems({}));
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(apiAction.setSearchQuery({ query: value }));
  };

  return (
    <div className={style.container}>
      <form
        name="search-form"
        onSubmit={onSubmit}
        className={style.form}
      >
        <input
          type="text"
          name="search"
          placeholder="Search by name"
          spellCheck="false"
          value={query}
          onChange={onChange}
        />
        <button
          type="submit"
          className={style.button}
        >
          <SearchLogo />
        </button>
      </form>
    </div>
  );
}

export { SearchForm };
