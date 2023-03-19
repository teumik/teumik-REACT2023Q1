import { Component, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import style from './header.module.scss';
import { ReactLogo } from '../ReactLogo/ReactLogo';
import { Navigation } from '../Navigation/Navigation';
import { paths } from '../../routers/Paths';

interface HeaderState {
  title: string;
}

class Header extends Component<PropsWithChildren, HeaderState> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      title: '',
    };
  }

  componentDidMount(): void {
    this.titleHandler();
    globalThis.onpopstate = this.titleHandler;
  }

  componentWillUnmount(): void {
    globalThis.onpopstate = null;
  }

  getCurrentTitle = () => {
    const { pathname } = globalThis.location;
    const title = paths.get(pathname);
    return title;
  };

  titleHandler = () => {
    const title = this.getCurrentTitle();
    this.setTitle(title);
  };

  setTitle = (title: string) => {
    this.setState((state) => ({ ...state, title }));
  };

  render() {
    const { title } = this.state;
    return (
      <header className={style.header}>
        <Link to="https://react.dev/">
          <ReactLogo />
        </Link>
        <h2>{title}</h2>
        <Navigation setTitle={this.setTitle} />
      </header>
    );
  }
}

export { Header };
