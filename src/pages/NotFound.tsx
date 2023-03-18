import { Component } from 'react';
import { BackButton } from '../components/BackButton/BackButton';

class NotFound extends Component {
  render() {
    return (
      <>
        <div>
          <BackButton />
        </div>
        <h1>Page not found</h1>
      </>
    );
  }
}

export { NotFound };
