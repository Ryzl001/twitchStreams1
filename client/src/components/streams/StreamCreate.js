import React, { Component } from "react";
// reduxForm to funkcja podobne do connect, która odpowiada za połączenie forlumarza ze State
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  /** Semating.ui domyślnie error message ustawia display: none w CSS */
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  // Wyciągamy z formProps tylko { input }
  // Wyciągamy kolejne właściwości, które zostały przekazane do pola Field
  renderInput = ({ input, label, meta }) => {
    const classNameError = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      // wypluwamy wszystkie właściwości formProps.input do <input />, takie jak onChange, value itp
      /** żeby podświtlić inputa w formularzu wystarczy dodać klasę error className="field error" */

      <div className={classNameError}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };
  // zamiast event wstawiamy formValue
  onSubmit(formValues) {
    // event.preventDefault(); - redux-form zrobi to za nas, nie musimy tego wstawiać
    // console.log(formValues);
  }

  render() {
    return (
      // w Field przekazujemy właściwości do renderInput, np label
      /** do formularza trzeba dodać klasę error, żeby komunikaty o błędzie
       * były wyświetlane prawidłowo- Sematnic UI
       */
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
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
