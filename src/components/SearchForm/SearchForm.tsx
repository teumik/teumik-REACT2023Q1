import { ChangeEvent, FormEvent, useState } from 'react';
import { SearchLogo } from '../SearchLogo/SearchLogo';
import style from './searchForm.module.scss';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import { fetchItems, apiAction } from '../../redux/slices/apiSlice';
import { paths } from '../../routers/Paths';

function SearchForm() {
  const dispatch = useTypedDispatch();
  const { query } = useTypedSelector((state) => state.api);
  const [search, setSearch] = useState(query);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(apiAction.resetCurrent());
    const params = `?name=${query}`;
    dispatch(fetchItems({ path: `${paths.serverUrl}/${params}` }));
    dispatch(apiAction.setSearchQuery({ query: search }));
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
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
          value={search}
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
