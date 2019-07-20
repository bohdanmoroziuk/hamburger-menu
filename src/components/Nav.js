import { NavLink } from 'inferno-router';

const Nav = ({ links }) => {
  const renderLink = link => (
    <NavLink 
      className="nav__link"
      activeClassName="nav__link--is-active"
      exact={true}
      key={link.to} 
      to={link.to}
    >
      {link.name}
    </NavLink>
  );

  return (
    <nav className="nav">
      {links.map(renderLink)}
    </nav>
  );
};

export default Nav;