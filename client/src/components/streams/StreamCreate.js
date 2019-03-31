import React, { Component } from "react";
// reduxForm to funkcja podobne do connect, która odpowiada za połączenie forlumarza ze State
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  render() {
    return (
      <form>
        <Field />
      </form>
    );
  }
}

export default reduxForm({
  // nazwa formy, jej funkcja
  form: "streamCreate"
})(StreamCreate);
