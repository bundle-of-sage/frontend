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

interface IProps {
  isRegistering: boolean;
  login: (user: User) => void;
}

interface IState {
  email: string;
  password: string;
  verifyPassword: string;
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

interface User {
  displayName: string | null;
  email: string;
  photoURL: string | null;
  uid: string;
  [x: string]: any;
}

class Auth extends Component<IProps, IState> {
  state: IState = {
    email: "",
    password: "",
    verifyPassword: "",
    loading: false,
    error: false,
    errorMessage: ""
  };

  googleLogin = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    event.preventDefault();
    try {
      const { user }: { user: any } = await auth.signInWithPopup(
        googleProvider
      );
      const { displayName, email, photoURL, uid } = user;

      if (typeof this.props.login === "function") {
        await this.props.login({ displayName, email, photoURL, uid });
      } else this.handleShowError("Something went wrong. Try again.");
    } catch (error) {
      this.handleShowError("Something went wrong. Try again.");
    }
  };

  emailLogin = async (
    event?: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    event && event.preventDefault();
    try {
      const { user }: { user: User } = await signInEmailUserProvider(
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

  emailSignUp = async (
    event: React.MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    event.preventDefault();
    try {
      if (this.state.password !== this.state.verifyPassword) {
        return this.handleShowError("Passwords do not match.");
      }
      const { user }: { user: User } = await createEmailUserProvider(
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

  handleShowError(
    errorMessage: string = "An unexpected error occurred."
  ): void {
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

interface IActionProps {
  login: object;
}

const dispatchProps: IActionProps = {
  login: login
};

export default connect<void>(
  null,
  dispatchProps
)(Auth);
