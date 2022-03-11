import React from "react";
import "./Navbar.css";
import "./App.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-header animation">Lauren Caton</h1>
      <div className="navbar-options animation">
        <div className="navbar__option">
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </div>

        <div className="navbar__option">
          <Link
            activeClass="active"
            to="Research"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Research
          </Link>
        </div>

        <div className="navbar__option">
          <Link
            activeClass="active"
            to="Tools"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Tools
          </Link>
        </div>

        <div className="navbar__option">
          <Link
            activeClass="active"
            to="Media"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Media
          </Link>
        </div>

        <div className="navbar__option">
          <Link
            activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
