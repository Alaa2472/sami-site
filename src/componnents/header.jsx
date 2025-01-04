import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ logoSrc, tagline, navLinks }) => {
  return (
    <header>
      <div className="container">
        <div className="logo-container">
          <img src={logoSrc} alt="Logo" />
        </div>
        <p>{tagline}</p>
        <nav>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>
                  <FontAwesomeIcon icon={link.icon} /> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;