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
  // zamiast event wstawiamy formValue
  onSubmit(formValues) {
    // event.preventDefault(); - redux-form zrobi to za nas, nie musimy tego wstawiać
    // console.log(formValues);
  }

  render() {
    return (
      // w Field przekazujemy właściwości do renderInput, np label
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({
  // nazwa formy, jej funkcja
  form: "streamCreate",
  validate: validate
})(StreamCreate);
