import React, { Component } from "react";
import { Link } from "react-router-dom";

class StreamDelete extends Component {
  render() {
    return (
      <div>
        <div>Stream Delete</div>
        <Link to="/">home</Link>
      </div>
    );
  }
}

export default StreamDelete;
