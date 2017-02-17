import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

// a wrapper for the whole application
const Base = () => (
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">Stay With You</IndexLink>
      </div>

      <div className="top-bar-right">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>

);

const LogedInHeader = () => (
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">Stay With You</IndexLink>
      </div>

      <div className="top-bar-right">
        <Link to="/logout">Log out</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
);

module.exports = {
  "Base"    : Base,
  "LogedInHeader" : LogedInHeader
}
