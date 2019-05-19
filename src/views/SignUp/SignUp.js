import React, { Component } from "react";
import classes from "./SignUp.module.scss";
import { Elements, StripeProvider } from "react-stripe-elements";
import InjectedSubForm from "../../components/SignUp/SubForm";

const fonts = [{ cssSrc: "https://fonts.googleapis.com/css?family=Open+Sans" }];
const { REACT_APP_STRIPE_KEY } = process.env;

export default class SignUp extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.paymentContainer}>
          <h3>Join Bundle of Sage</h3>
          <h6>$50 USD - MEMBERSHIP ACCESS</h6>
          <StripeProvider apiKey={REACT_APP_STRIPE_KEY}>
            <Elements fonts={fonts}>
              <InjectedSubForm {...this.props} />
            </Elements>
          </StripeProvider>
        </div>
      </div>
    );
  }
}
