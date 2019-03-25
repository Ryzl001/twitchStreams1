import React, { Component } from "react";
import { Link } from "react-router-dom";

class StreamList extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="streams/new">New</Link>
        </div>
        <div>
          <Link to="streams/edit">Edit</Link>
        </div>
        <div>
          <Link to="streams/delete">Delete</Link>
        </div>
        <div>
          <Link to="streams/show">Show</Link>
        </div>
      </div>
    );
  }
}

export default StreamList;
