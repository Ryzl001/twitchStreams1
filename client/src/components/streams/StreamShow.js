import React, { Component } from "react";
import { Link } from "react-router-dom";

class StreamShow extends Component {
  render() {
    return (
      <div>
        <div>Stream Show</div>
        <Link to="/">home</Link>
      </div>
    );
  }
}

export default StreamShow;
