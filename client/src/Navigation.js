import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';
import { useAuth0 } from '@auth0/auth0-react';

const Navigation = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const navLinks = [
    { text: 'Home', path: '/' },
    { text: 'Projects', path: '/projects' },
    { text: 'User Details', path: '/user' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <div className="mr-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" >
            Profile
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navLinks.map((link, index) => (
                <li className="nav-item" key={index}>
                  <NavLink className="nav-link" to={link.path}>
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <ul className="navbar-nav ml-auto">
            {isAuthenticated ? (
              <li>
                <Logout />
              </li>
            ) : (
              <li>
                <NavLink
                  type="button"
                  className="btn btn-dark"
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
