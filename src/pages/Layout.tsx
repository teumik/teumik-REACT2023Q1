import { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Header } from '../components/Header';
import { ReactLogo } from '../components/ReactLogo/ReactLogo';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';

class Layout extends Component {
  render() {
    return (
      <>
        <Header>
          <Link to="https://react.dev/">
            <ReactLogo />
          </Link>
          <Navigation />
        </Header>
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </>
    );
  }
}

export { Layout };
