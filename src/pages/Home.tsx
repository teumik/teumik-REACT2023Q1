import { Component } from 'react';
import { SearchForm } from '../components/SearchForm';

class Home extends Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <SearchForm />
      </>
    );
  }
}

export { Home };
