import React, { useState } from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "./Header.scss";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const forumRoute = useRouteMatch("/forum");
  const [openMenu, setopenMenu] = useState(false);
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
        <nav className={openMenu ? "hidden" : ""}>
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
        <button className="hamburger" onClick={() => setopenMenu(!openMenu)}>
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
