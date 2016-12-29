import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

// a wrapper for the whole application
const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">Stay With You</IndexLink>
      </div>

      <div className="top-bar-right">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>

    </div>

    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;