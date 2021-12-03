import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

function Navigation({ url, title }) {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to={url} activeClassName="active" className="nav">{title}</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
