import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css';

function Navbar () {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const clickHandle = () => {
    setClick((prev) => !prev);
  }

  const closeMenu = () => {
    setClick(false);
  }

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  },[]);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            CR7 <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={clickHandle}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/service" className="nav-links" onClick={closeMenu}>
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/product" className="nav-links" onClick={closeMenu}>
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/sign-up" className="nav-links-mobile" onClick={closeMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>

    </>
  )
}

export default Navbar;