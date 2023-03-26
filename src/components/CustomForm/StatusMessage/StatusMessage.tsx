import { Component } from 'react';
import style from './statusMessage.module.scss';

class StatusMessage extends Component {
  render() {
    return <div className={style.message}>Form data was saved</div>;
  }
}

export { StatusMessage };
