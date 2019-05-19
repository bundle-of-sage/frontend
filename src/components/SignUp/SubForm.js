import React, { Component } from "react";
import classes from "./SubForm.module.scss";
import { injectStripe } from "react-stripe-elements";
import CardSection from "./CardSection";
import api from "../../api/api";
import Spinner from "../Layout/Spinner";

class SubForm extends Component {
  state = { loading: false, error: false, errorMessage: null, success: false };

  handleSubmit = async ev => {
    ev.preventDefault();
    try {
      await this.setState({ loading: true });
      //Create Stripe Token
      let { token } = await this.props.stripe.createToken();
      //Submit Payment
      await api.user.chargePayment({ token: token.id });
      //On success, show success UI
      await this.setState({ loading: false, success: true });
    } catch (error) {
      //On error, show error UI
      this.setState({ error: true });
      console.log("Error: ", error);
    }
  };

  render() {
    const { loading, error, errorMessage } = this.state;
    return (
      <>
        <form>
          <div className={classes.cardElementContainer}>
            <CardSection />
          </div>

          <button type="button" onClick={this.handleSubmit}>
            {loading ? (
              <Spinner isLoading={loading} size={20} color="white" />
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </>
    );
  }
}

export default injectStripe(SubForm);
