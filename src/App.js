import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import api from "./api/api";

let Auth = React.lazy(() => import("./views/Auth/Auth"));
let SignUp = React.lazy(() => import("./views/SignUp/SignUp"));
let Dashboard = React.lazy(() => import("./views/Dashboard/Dashboard"));

export default class App extends Component {
  state = { checkingAuth: false, isAuthorized: false, activeMembership: false };

  async componentDidMount() {
    this.setState({ checkingAuth: true });
    const { data } = await api.auth.checkStatus();
    this.setState({
      isAuthorized: data.authorized,
      activeMembership: data.activeMembership,
      checkingAuth: false
    });
  }
  render() {
    const { checkingAuth, isAuthorized, activeMembership } = this.state;
    if (checkingAuth) return null;
    else if (isAuthorized && activeMembership) {
      return (
        <Provider store={store}>
          <Suspense fallback={<p>Loading...</p>}>
            <Router>
              <Switch>
                <Route path="/" exact component={Dashboard} />
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
                {isAuthorized ? (
                  <Route path="/" exact component={SignUp} />
                ) : (
                  <Route path="/" exact component={Auth} />
                )}
              </Switch>
            </Router>
          </Suspense>
        </Provider>
      );
    }
  }
}
