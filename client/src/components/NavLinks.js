import links from '../utils/links';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map(({ id, path, text, icon }) => {
        return (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            onClick={toggleSidebar}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
