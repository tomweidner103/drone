import React from "react";
import ReactDOM from "react-dom";
import Streaming from "./Streaming";
import Flying from "./Flying";
import { Route, HashRouter } from "react-router-dom";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Flying} />
        <Route exact path="/streaming" component={Streaming} />
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <Main />
  </HashRouter>,
  document.getElementById("app")
);
