
import React from 'react';

import PrefetchLink from '../../hoc/PrefetchLink';
import './header.css';

const Header = () => (
  <header>
    <ul className="navbar">
      <div className="flex">
        <li><PrefetchLink to="/">Home</PrefetchLink></li>
        <li><PrefetchLink to="/pages/world">World</PrefetchLink></li>
        <li><PrefetchLink to="/pages/tech">Tech</PrefetchLink></li>
        <li><PrefetchLink to="/pages/contact">Contact</PrefetchLink></li>
      </div>
      <li className="profile-icon"><img src="https://cdn.glitch.com/2feb9fb8-169d-4ea0-9d82-ece1d1199861/icon.svg?v=1560086780686" alt="profile icon" /></li>
    </ul>
  </header>
);

export default Header;
