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
    const { user: newUser } = this.props;
    const { user: prevUser } = prevProps;

    if (prevUser.user_id !== newUser.user_id) {
      //User logged in
      this.updateAuthStatus();
    } else if (prevUser.membership_paid !== newUser.membership_paid) {
      //Successfully charged payment
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
