import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Streamer
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          <Link to="/logout" className="item">
            Logout
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
