import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import NotFound from "./components/NotFound";
import * as serviceWorker from "./serviceWorker";

import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.css";

const Root = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={App} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
