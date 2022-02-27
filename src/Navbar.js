import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-header">Lauren Caton</h1>
      <div className="navbar-options">
        <div className="navbar__option">About</div>
        <div className="navbar__option">Research</div>
        <div className="navbar__option">Tools</div>
        <div className="navbar__option">Media</div>
        <div className="navbar__option">Projects</div>
      </div>
    </div>
  );
}

export default Navbar;
