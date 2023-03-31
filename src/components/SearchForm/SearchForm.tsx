import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { SearchLogo } from '../SearchLogo/SearchLogo';
import style from './searchForm.module.scss';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface SearchProps {
  setQuery: (query: string) => void;
}

function SearchForm({ setQuery }: SearchProps) {
  const { getStorageValue, storageEffect } = useLocalStorage('search');
  const [search, setSearch] = useState(getStorageValue());

  useEffect(() => {
    setQuery(search);
  });

  useEffect(() => storageEffect(search));

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery(search);
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
          placeholder="Search"
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
