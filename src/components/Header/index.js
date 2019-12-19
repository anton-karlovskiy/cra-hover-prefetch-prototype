
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pages/world">World</Link></li>
        <li><Link to="/pages/tech">Tech</Link></li>
        <li><Link to="/pages/contact">Contact</Link></li>
        <li className="profile-icon"><img src="https://cdn.glitch.com/2feb9fb8-169d-4ea0-9d82-ece1d1199861/icon.svg?v=1560086780686" alt="profile icon" /></li>
      </ul>
    </header>
  );
};

export default Header;
