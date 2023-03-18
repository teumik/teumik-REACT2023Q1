import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </>
    );
  }
}

export { Layout };
