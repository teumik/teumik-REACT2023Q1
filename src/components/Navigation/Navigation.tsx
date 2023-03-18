import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './navigation.module.scss';

interface NavigationProps {
  setTitle: (title: string) => void;
}

class Navigation extends Component<NavigationProps> {
  setActiveStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${style.link} ${style.active}` : style.link;

  render() {
    const { setTitle } = this.props;
    return (
      <nav className={style.nav}>
        <NavLink to="/" className={this.setActiveStyle} onClick={() => setTitle('Home')}>
          Home
        </NavLink>
        <NavLink to="/about" className={this.setActiveStyle} onClick={() => setTitle('About Us')}>
          About Us
        </NavLink>
      </nav>
    );
  }
}

export { Navigation };
