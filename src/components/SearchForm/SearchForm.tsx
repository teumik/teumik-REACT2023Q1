import { Component, ReactPropTypes } from 'react';
import { Form } from 'react-router-dom';
import { SearchLogo } from '../SearchLogo';
import style from './searchForm.module.scss';

interface SearchState {
  search: string;
}

class SearchForm extends Component<Partial<ReactPropTypes>, SearchState> {
  constructor(props: Partial<ReactPropTypes>) {
    super(props);
    this.state = {
      search: this.localStorageValue(),
    };
  }

  componentDidMount(): void {
    const search = this.localStorageValue();
    this.setState((state) => ({ ...state, search }));
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

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('https://fakestoreapi.com/products/1')
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: search } = event.target;
    this.setState((state) => ({ ...state, search }));
  };

  render() {
    const { search } = this.state;
    return (
      <div className={style.container}>
        <Form onSubmit={this.onSubmit} className={style.form}>
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
        </Form>
      </div>
    );
  }
}

export { SearchForm };
