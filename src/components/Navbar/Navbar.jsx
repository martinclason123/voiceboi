import React, { useState } from 'react';
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app_navbar">
      <div className="app__navbar-logo">
        <img src={images.portrait}></img>
        <h1> Voice Boi</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#home">About</a>
        </li>
        <li className="p__opensans">
          <a href="#home">Popular</a>
        </li>
        <li className="p__opensans">
          <a href="#home">Videos</a>
        </li>
        <li className="p__opensans">
          <a href="#home">Articles</a>
        </li>
        <li className="p__opensans">
          <a href="#home">Services</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu ? (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#home">About</a>
              </li>
              <li className="p__opensans">
                <a href="#home">Popular</a>
              </li>
              <li className="p__opensans">
                <a href="#home">Videos</a>
              </li>
              <li className="p__opensans">
                <a href="#home">Articles</a>
              </li>
              <li className="p__opensans">
                <a href="#home">Services</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
