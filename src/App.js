import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import api from "./api/api";
import Auth from "./views/Auth/Auth";
import SignUp from "./views/SignUp/SignUp";
import Dashboard from "./views/Dashboard/Dashboard";
import { connect } from "react-redux";

class App extends Component {
  state = { checkingAuth: false, isAuthorized: false, activeMembership: false };

  async componentDidMount() {
    this.updateAuthStatus();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user.user_id !== this.props.user.user_id) {
      this.updateAuthStatus();
    }
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
        <Router>
          <Switch>
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </Router>
      );
    } else {
      return (
        <Router>
          <Switch>
            {isAuthorized ? (
              <Route path="/" exact component={SignUp} />
            ) : (
              <Route path="/" exact component={Auth} />
            )}
          </Switch>
        </Router>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  {}
)(App);
