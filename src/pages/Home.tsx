import { Component } from 'react';
import { Products } from '../components/Products/Products';

class Home extends Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <Products />
      </>
    );
  }
}

export { Home };
