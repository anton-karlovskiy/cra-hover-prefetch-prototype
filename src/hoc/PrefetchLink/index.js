
import React from 'react';
import { prefetch } from 'quicklink';
import rmanifest from 'route-manifest';
import { Link } from 'react-router-dom';

import './prefetch-link.css';

const PrefetchLink = ({ children, to, ...rest }) => {
  const onMouseEnterHandler = async event => {
    if (!window._rmanifest_) {
      console.log('[hoc PrefetchLink] route manifest is not stored');
      const response = await fetch('/rmanifest.json');
      const data = await response.json();
      // attach route manifest to global
      window._rmanifest_ = data;
    } else {
      console.log('[hoc PrefetchLink] route manifest is already stored');
    }
    
    const entry = rmanifest(window._rmanifest_, to);
    const chunkURLs = entry.files.map(file => file.href);
    console.log('[hoc PrefetchLink] to, chunkURLs => ', to, chunkURLs);
    if (chunkURLs.length > 0) {
      prefetch(chunkURLs);
    }
  };

  return (
    <div className="prefetch-link" onMouseEnter={onMouseEnterHandler}>
      <Link to={to} {...rest}>{children}</Link>
    </div>
  );
};

export default PrefetchLink;
