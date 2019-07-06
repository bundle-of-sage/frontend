import React, { Component } from "react";
import classes from "./Auth.module.scss";
import {
  auth,
  googleProvider,
  createEmailUserProvider,
  signInEmailUserProvider
} from "../../firebase/auth";
import { connect } from "react-redux";
import { login } from "../../store/actions/userActions";

class Auth extends Component {
  state = {
    email: "",
    password: "",
    verifyPassword: "",
    loading: false
  };

  googleLogin = async event => {
    event.preventDefault();
    const { user } = await auth.signInWithPopup(googleProvider);
    const { displayName, email, photoURL, uid } = user;
    await this.props.login({ displayName, email, photoURL, uid });
  };

  emailLogin = async event => {
    console.log("Email Logging In...");
    try {
      event.preventDefault();
      const { user } = await signInEmailUserProvider(
        this.state.email,
        this.state.password
      );
      const { displayName, email, photoURL, uid } = user;
      await this.props.login({ displayName, email, photoURL, uid });
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        console.log("Email already in use");
      }
    }
  };

  emailSignUp = async event => {
    try {
      event.preventDefault();
      const { user } = await createEmailUserProvider(
        this.state.email,
        this.state.password
      );
      const { displayName, email, photoURL, uid } = user;
      await this.props.login({ displayName, email, photoURL, uid });
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/email-already-in-use") {
        this.emailLogin();
      }
    }
  };

  render() {
    return (
      <div className={classes.authContainer}>
        <form>
          <h1>Bundle of Sage</h1>
          <input
            type="text"
            placeholder="Email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => this.setState({ password: e.target.value })}
          />

          {false && (
            <input
              type="password"
              placeholder="Verify Password"
              className={classes.bottomInput}
              onChange={e => this.setState({ verifyPassword: e.target.value })}
            />
          )}

          <button onClick={this.emailLogin}>Sign In</button>
          <button onClick={this.googleLogin}>
            <i className="fab fa-google" />
            Sign In with Google
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Auth);
