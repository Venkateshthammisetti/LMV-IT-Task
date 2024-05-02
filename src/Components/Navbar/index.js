import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
  return (
    <div className="container">
      <Link to="/" className="navbar-logo">
        <div>
          <img
            src="https://www.squareinsurance.in/assets/square_images_web/square_full_logo.svg"
            alt="logo"
            className="logo-img"
          />
        </div>
      </Link>
      <div className="nav-items-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Insurence Product
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              Insurence Advisors
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Claim
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Support
            </Link>
          </li>
          <div className="button-container">
            <button className="button0">Become POSP</button>
            <button className="button">Login</button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
