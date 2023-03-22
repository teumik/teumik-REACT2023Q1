import { Component } from 'react';
import style from './footer.module.scss';

class Footer extends Component {
  render() {
    return <footer className={style.footer}>{new Date().getFullYear()}</footer>;
  }
}

export { Footer };
