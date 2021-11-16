import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav role="navigation" className="nav">
      <div class="nav-list">
        <Link to="/home" className="Link"> home </Link>
        <Link to="/videogame" className="Link"> add a videogame </Link>
      </div>
    </nav>
  );
};

export default Nav;
