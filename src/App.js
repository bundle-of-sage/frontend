import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import api from "./api/api";
import Auth from "./views/Auth/Auth";
import SignUp from "./views/SignUp/SignUp";
import Dashboard from "./views/Dashboard/Dashboard";

export default class App extends Component {
  state = { checkingAuth: false, isAuthorized: false, activeMembership: false };

  async componentDidMount() {
    this.updateAuthStatus();
  }

  updateAuthStatus = async () => {
    this.setState({ checkingAuth: true });
    const { data } = await api.auth.checkStatus();
    this.setState({
      isAuthorized: data.authorized,
      activeMembership: data.activeMembership,
      checkingAuth: false
    });
  };

  render() {
    const { checkingAuth, isAuthorized, activeMembership } = this.state;

    if (checkingAuth) return null;
    else if (isAuthorized && activeMembership) {
      return (
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </Provider>
      );
    } else {
      return (
        <Provider store={store}>
          <Router>
            <Switch>
              {!isAuthorized ? (
                <Route
                  path="/"
                  exact
                  render={props => {
                    return (
                      <Auth
                        {...props}
                        updateAuthStatus={this.updateAuthStatus}
                      />
                    );
                  }}
                />
              ) : (
                <Route
                  path="/"
                  render={props => {
                    return (
                      <SignUp
                        {...props}
                        updateAuthStatus={this.updateAuthStatus}
                      />
                    );
                  }}
                />
              )}
            </Switch>
          </Router>
        </Provider>
      );
    }
  }
}
