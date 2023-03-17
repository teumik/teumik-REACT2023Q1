import { Component, PropsWithChildren } from 'react';
import style from './header.module.scss';

class Header extends Component<PropsWithChildren> {
  render() {
    const { children } = this.props;
    return <header className={style.header}>{children}</header>;
  }
}

export { Header };
