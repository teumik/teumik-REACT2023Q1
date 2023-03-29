import { Component, PropsWithChildren } from 'react';
import style from './main.module.scss';

class Main extends Component<PropsWithChildren> {
  render() {
    const { children } = this.props;
    return <main className={style.main}>{children}</main>;
  }
}

export { Main };
