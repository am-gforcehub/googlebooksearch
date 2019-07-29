import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navBar">
      <a className="navbar-brand navTitle" href="/">
        Books 4 Bookworms
      </a>
      <span>
        <img
          src="http://clipart-library.com/images/8iG68A8oT.png"
          alt="bookworm"
        />
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
