import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './navigation.module.scss';
import { paths } from '../../routers/Paths';

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
        {paths.getDatas().map(([path, title]) => (
          <NavLink
            key={path}
            to={path}
            className={this.setActiveStyle}
            onClick={() => setTitle(title)}
          >
            {title}
          </NavLink>
        ))}
      </nav>
    );
  }
}

export { Navigation };
