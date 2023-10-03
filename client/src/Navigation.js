import { NavLink} from "react-router-dom";
import Logout from "./Logout";
import { useAuth0 } from '@auth0/auth0-react';
const Navigation = () => {
  const { isAuthenticated, loginWithRedirect} = useAuth0();
  return (
    
    <div className="mr-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Profile
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/user">
                  User Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav ml-auto">
          {isAuthenticated ? (
          <li>
            <Logout/>
          </li>
        ) : (
          <li>
            <NavLink  type="button" className="btn btn-dark" onClick={() => loginWithRedirect()}>
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
