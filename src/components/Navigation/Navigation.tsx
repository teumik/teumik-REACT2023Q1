import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './navigation.module.scss';

class Navigation extends Component {
  setActiveStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${style.link} ${style.active}` : style.link;

  render() {
    return (
      <nav className={style.nav}>
        <NavLink to="/" className={this.setActiveStyle}>
          Home
        </NavLink>
        <NavLink to="/about" className={this.setActiveStyle}>
          About Us
        </NavLink>
      </nav>
    );
  }
}

export { Navigation };
