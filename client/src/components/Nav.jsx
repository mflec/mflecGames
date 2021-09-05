import React from "react";
import Filters from "./Filters";

function Nav() {
  return (
    <nav role="navigation" className="nav">
      <div class="nav-list">
        <a href="/home" className="Link"> home </a>
        <a href="/videogame" className="Link"> add a videogame </a>
      </div>
    </nav>
  );
};

export default Nav;
