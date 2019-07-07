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
    loading: false,
    error: false,
    errorMessage: ""
  };

  googleLogin = async event => {
    event.preventDefault();
    try {
      const { user } = await auth.signInWithPopup(googleProvider);
      const { displayName, email, photoURL, uid } = user;
      await this.props.login({ displayName, email, photoURL, uid });
    } catch (error) {
      this.handleShowError("Something went wrong. Try again.");
    }
  };

  emailLogin = async event => {
    event && event.preventDefault();
    try {
      const { user } = await signInEmailUserProvider(
        this.state.email,
        this.state.password
      );
      const { displayName, email, photoURL, uid } = user;
      await this.props.login({ displayName, email, photoURL, uid });
    } catch (error) {
      const errorCode = error.code;
      if (errorCode === "auth/user-not-found") {
        this.handleShowError(
          "No account found. Please try a differrent email or sign up!"
        );
      } else if (errorCode === "auth/wrong-password") {
        this.handleShowError("Wrong password.");
      }
    }
  };

  emailSignUp = async event => {
    event.preventDefault();
    try {
      if (this.state.password !== this.state.verifyPassword) {
        return this.handleShowError("Passwords do not match.");
      }
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

  handleShowError(errorMessage = "An unexpected error occurred.") {
    this.setState({ error: true, errorMessage });
  }

  render() {
    const { isRegistering } = this.props;
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

          {isRegistering && (
            <input
              type="password"
              placeholder="Verify Password"
              className={classes.bottomInput}
              onChange={e => this.setState({ verifyPassword: e.target.value })}
            />
          )}

          {this.state.error && (
            <p className={classes.errorMessage}>
              <i className="fas fa-exclamation-circle" />
              {this.state.errorMessage || "An unexpected error occurred."}
            </p>
          )}

          <button onClick={isRegistering ? this.emailSignUp : this.emailLogin}>
            {isRegistering ? "Sign Up" : "Sign In"}
          </button>
          <button onClick={this.googleLogin}>
            <i className="fab fa-google" />
            {isRegistering ? "Sign Up with Google" : "Sign In with Google"}
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
