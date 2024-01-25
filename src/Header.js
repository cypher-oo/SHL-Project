// src/components/Header.js

import React from 'react';
import './Homepage.css'; // Import the styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Header = () => {
  return (
    <header className="main-header bg-dark text-white">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="left-section">
            <h2>SneakerZone</h2>
          </div>
          <nav className="center-section">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#men">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#women">Women</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#kids">Kids</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
