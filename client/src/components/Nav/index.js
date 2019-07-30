import React from "react";
import "./style.css";
const logo = require("../../images/worm2.png");

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navMain">
      <a className="navbar-brand navTitle" href="/">
        Books 4 Bookworms
      </a>
      <span>
        <img src={logo} alt="worm" />
      </span>
      <a className="navbar-brand subtitle" href="/">
        SEARCH
      </a>
      <a className="navbar-brand subtitle" href="/saved">
        SAVED
      </a>
    </nav>
  );
}

export default Nav;
