import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      // jako initial value wysyłamy obiekt {}
      // wstawiamy nazwę  nazwa field: wartość pobrana z this.props
      //
      // możemy wstawić obiect {{ title: this.props.stream.title, description: this.props.stream.descritpion }}
      // albo użyć biblioteki lodash i methody pick, która wyciąga z całego obiektu tylko te wartości, które podamy
      // jako drugi agrument w postaci listy.
      <div>
        <h3>Edit a Stream</h3>

        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
