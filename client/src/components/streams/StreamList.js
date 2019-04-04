import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderStreamList() {
    return this.props.streams.map(stream => {
      return (
        <div className="ui raised segment item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}

            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props);
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreamList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  /**Object.values jako argument bierze object
   * i zwraca tablicę z values tego obiektu
   * używamy, aby potem użyć map na tablicy do wyrenderowania jej zawartości
   */
  return { streams: Object.values(state.streams) };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
