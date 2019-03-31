import React, { Component } from "react";
// reduxForm to funkcja podobne do connect, która odpowiada za połączenie forlumarza ze State
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  // Wyciągamy z formProps tylko { input }
  renderInput({ input }) {
    // console.log(input);
    return (
      // wypluwamy wszystkie właściwości formProps.input do <input />, takie jak onChange, value itp
      <div>
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  // nazwa formy, jej funkcja
  form: "streamCreate"
})(StreamCreate);
