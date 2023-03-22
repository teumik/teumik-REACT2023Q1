import { Component } from 'react';
import { BackButton } from '../components/BackButton/BackButton';

class NotFound extends Component {
  render() {
    return (
      <>
        <div>
          <BackButton />
        </div>
        <div>
          <h1>404</h1>
          <h2>Page Not Found</h2>
        </div>
      </>
    );
  }
}

export { NotFound };
