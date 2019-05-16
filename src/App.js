import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import api from "./api/api";

let Auth = React.lazy(() => import("./views/Auth/Auth"));
let SignUp = React.lazy(() => import("./views/SignUp/SignUp"));

export default class App extends Component {
  state = { checkingAuth: false, isAuthorized: false };

  async componentDidMount() {
    this.setState({ checkingAuth: true });
    const { data } = await api.auth.checkStatus();
    this.setState({
      isAuthorized: data.authorized,
      checkingAuth: false
    });
  }
  render() {
    const { checkingAuth, isAuthorized } = this.state;
    if (checkingAuth) return null;
    else if (isAuthorized) {
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
    } else {
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
}
