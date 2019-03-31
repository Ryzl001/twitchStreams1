import React, { Component } from "react";
// reduxForm to funkcja podobne do connect, która odpowiada za połączenie forlumarza ze State
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  // Wyciągamy z formProps tylko { input }
  // Wyciągamy kolejne właściwości, które zostały przekazane do pola Field
  renderInput({ input, label }) {
    // console.log(input);
    return (
      // wypluwamy wszystkie właściwości formProps.input do <input />, takie jak onChange, value itp
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  render() {
    return (
      // w Field przekazujemy właściwości do renderInput, np label
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
      </form>
    );
  }
}

export default reduxForm({
  // nazwa formy, jej funkcja
  form: "streamCreate"
})(StreamCreate);
