
// ray test touch <
import React from 'react';
import { Link } from 'react-router-dom';

import './prefetch-link.css';

const PrefetchLink = ({ children, to, ...rest }) => {
  const onMouseEnterHandler = event => {
    console.log('ray : ***** [hoc PrefetchLink] to => ', to);
  };

  return (
    <div className="prefetch-link" onMouseEnter={onMouseEnterHandler}>
      <Link to={to} {...rest}>{children}</Link>
    </div>
  );
};

export default PrefetchLink;
// ray test touch >
