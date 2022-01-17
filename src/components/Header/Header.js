import React from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "./Header.scss";

const Header = () => {
  const forumRoute = useRouteMatch("/forum");
  return (
    <header className="container">
      <div className="logo">
        <Link to="/" style={{ height: "40px" }}>
          <img src={Logo} alt="Logo" />
        </Link>
        {forumRoute && (
          <div>
            <span>forum</span>
          </div>
        )}
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <NavLink to="/forum">Forum</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Bloq</NavLink>
            </li>
            <li>
              <button>
                <Link to="#"> Bizə qoşul</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
