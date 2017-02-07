import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

// a wrapper for the whole application
const Profile = React.createClass({
  render() {
    return (
  <div className="top-bar">
      <div className="top-bar-right">
        <Link to="/logout">Log out</Link>
        <Link to="/signup">Sign up</Link>
      </div>

   <div>
      <Link to="/moments">Moments</Link>
    </div>

  </div>

  );
  }
});

export default Profile;
