import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import {LogedInHeader} from './Base.jsx';

// a wrapper for the whole application
const Profile = React.createClass({
  render() {
    return (
      <div>
        {/*<Base>
          <div className="top-bar-right">
            <Link to="/logout">Log out</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        </Base>*/}
      <LogedInHeader />
      <div className="container-left">
          <div>
            <Link to="/posts">Posts</Link>
          </div>
      </div>
  </div>
  );
  }
});

export default Profile;
