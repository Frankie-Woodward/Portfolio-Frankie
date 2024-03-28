import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
const Navbar = ({ activeIndex, navigateToSlide }) => {
  const routeToIndexMap = {
    '/': 0, // Homepage corresponds to the first slide
    '/projects': 1, // ProjectsPage corresponds to the second slide
    '/frankie': 2, // FrankiePage corresponds to the third slide
    '/contact': 3, // ContactPage corresponds to the fourth slide
  };

  const handleNavLinkClick = (path) => {
    const slideIndex = routeToIndexMap[path];
    navigateToSlide(slideIndex);
  };

  const isActiveLink = (path) => routeToIndexMap[path] === activeIndex;

  return (
    <nav>
      <div className="navbar-brand">
        <ul className="nav justify-content-center">
          {Object.keys(routeToIndexMap).map((path) => (
            <li key={path} className="nav-item">
              <NavLink
                className="nav-link"
                to={path}
                style={
                  isActiveLink(path) ? { fontWeight: 'bold', color: 'blue', backgroundColor: 'rgba(255, 255, 255, 0.5)' } : { backgroundColor: 'rgba(255, 255, 255, 0.5)'}
                }
                onClick={() => handleNavLinkClick(path)}
              >
                {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
