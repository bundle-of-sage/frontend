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

          <div className={classes.featureContainer}>
            <div>
              <h6>$50 USD - MEMBERSHIP ACCESS</h6>
            </div>
            <div style={{ alignItems: "flex-end" }}>
              <p>
                <i className="far fa-calendar" /> No Subscription
              </p>
              <p>
                <i className="fas fa-columns" />
                New Content Added
              </p>
              <p>
                <i className="fas fa-box-open" />
                All in One Place
              </p>
            </div>
          </div>
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
