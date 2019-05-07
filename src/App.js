import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

let Auth = React.lazy(() => import("./views/Auth/Auth"));
let SignUp = React.lazy(() => import("./views/SignUp/SignUp"));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Suspense fallback={<p>Loading...</p>}>
          <Router>
            <Switch>
              <Route path="/" exact component={Auth} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </Router>
        </Suspense>
      </Provider>
    );
  }
}
