import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  renderStreamList() {
    return this.props.streams.map(stream => {
      return (
        <div className="ui raised segment item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <Link to="/streams/new" className="ui button positive right floated">
          Create Stream
        </Link>
      );
    }
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreamList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  /**Object.values jako argument bierze object
   * i zwraca tablicę z values tego obiektu
   * używamy, aby potem użyć map na tablicy do wyrenderowania jej zawartości
   */
  return {
    streams: Object.values(state.streams),
    // Wyciągamy ze state id usera i wstawiamy do this.props
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
