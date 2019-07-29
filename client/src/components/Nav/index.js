import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg" id="navBar">
      <a className="navbar-brand" href="/">
        Books 4 Bookworms
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-right">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              SEARCH <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              SAVED
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
