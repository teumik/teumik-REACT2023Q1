import { ChangeEvent, Component, FormEvent } from 'react';
import { SearchLogo } from '../SearchLogo/SearchLogo';
import style from './searchForm.module.scss';

interface SearchState {
  search: string;
}

interface SearchProps {
  setQuery: (query: string) => void;
}

class SearchForm extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      search: this.localStorageValue(),
    };
  }

  componentDidMount(): void {
    const search = this.localStorageValue();
    this.setSearch(search);
    const { setQuery } = this.props;
    setQuery(search);
    globalThis.addEventListener('beforeunload', this.saveStateToLocalStorage);
  }

  componentWillUnmount(): void {
    this.saveStateToLocalStorage();
    globalThis.removeEventListener('beforeunload', this.saveStateToLocalStorage);
  }

  saveStateToLocalStorage = () => {
    const { search } = this.state;
    globalThis.localStorage.setItem('search', search);
  };

  localStorageValue = () => globalThis.localStorage.getItem('search') || '';

  onSubmit = (event: FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    event.preventDefault();
    const { search } = this.state;
    const { setQuery } = this.props;
    setQuery(search);
  };

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setSearch(value);
  };

  setSearch = (search: string) => this.setState((state) => ({ ...state, search }));

  render() {
    const { search } = this.state;
    return (
      <div className={style.container}>
        <form name="search-form" onSubmit={this.onSubmit} className={style.form}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            spellCheck="false"
            value={search}
            onChange={this.onChange}
          />
          <button type="submit" className={style.button}>
            <SearchLogo />
          </button>
        </form>
      </div>
    );
  }
}

export { SearchForm };
