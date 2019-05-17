import React, { Component } from "react";
import classes from "./SubForm.module.scss";
import { injectStripe } from "react-stripe-elements";
import CardSection from "./CardSection";
import api from "../../api/api";

class SubForm extends Component {
  state = { loading: false };

  handleSubmit = async ev => {
    ev.preventDefault();
    let { token } = await this.props.stripe.createToken();
    console.log("Stripe Token Generated: ", token);
    const paymentResponse = await api.user.chargePayment({
      token: token.id
    });
    console.log("Payment Response: ", paymentResponse);
  };

  render() {
    return (
      <form>
        <div className={classes.cardElementContainer}>
          <CardSection />
        </div>

        <button type="button" onClick={this.handleSubmit}>
          Sign Up
        </button>
      </form>
    );
  }
}

export default injectStripe(SubForm);
