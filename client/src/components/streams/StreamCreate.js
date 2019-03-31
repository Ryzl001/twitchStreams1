import React, { Component } from "react";
// reduxForm to funkcja podobne do connect, która odpowiada za połączenie forlumarza ze State
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  // formProps - przekazywane właściwości z redux-form
  renderInput(formProps) {
    return (
      <div>
        <input
          // wykorzystujemy właściwości formProps przekazane z redux-form
          onChange={formProps.input.onChange}
          value={formProps.input.value}
        />
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
