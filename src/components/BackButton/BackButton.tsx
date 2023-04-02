import { Component } from 'react';
import style from './backButton.module.scss';

class BackButton extends Component {
  private back = () => {
    globalThis.history.back();
  };

  render() {
    return (
      <button
        type="button"
        className={style.button}
        onClick={this.back}
      >
        Back
      </button>
    );
  }
}

export { BackButton };
