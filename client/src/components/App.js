import React, { Component } from "react";
import { Router, Route } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import Header from "./Header";
import history from "../history";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path={"/"} exact component={StreamList} />
            <Route path={"/streams/new"} exact component={StreamCreate} />
            <Route path={"/streams/edit/:id"} exact component={StreamEdit} />
            <Route
              path={"/streams/delete/:id"}
              exact
              component={StreamDelete}
            />
            <Route path={"/streams/show"} exact component={StreamShow} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
