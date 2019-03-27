import React, { Component } from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

class Header extends Component {
  render() {
    return (
      <div className="ui menu">
        <Link to="/" className="header item">
          Streamy
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

export default Header;
