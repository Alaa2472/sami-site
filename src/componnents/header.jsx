import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ logoSrc, tagline, navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        {/* الشعار + الوصف + البرجر في صف واحد */}
        <div className="header-top">
          <img className="logo" src={logoSrc} alt="Logo" />
          <p>{tagline}</p>
          <button
            onClick={toggleMenu}
            className="menu-toggle"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        {/* القائمة */}
        <nav>
          <ul className={isMenuOpen ? "active" : ""}>
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
