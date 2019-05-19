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
      const errorMessage =
        error.response.data.errorMessage ||
        "We are having trouble processing your payment. Please try again.";
      this.setState({ loading: false, error: true, errorMessage });
    }
  };

  render() {
    const { loading, error, errorMessage, success } = this.state;
    return (
      <>
        {!success && (
          <form>
            <div className={classes.cardElementContainer}>
              <CardSection />
            </div>

            {error && <h5 className={classes.errorMessage}>{errorMessage}</h5>}

            <button type="button" onClick={this.handleSubmit}>
              {loading ? (
                <Spinner isLoading={loading} size={20} color="white" />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        )}
        {success && (
          <>
            <h4 className={classes.successMessage}>
              <i className="far fa-check-circle" />
              Payment successful!
            </h4>
            <button type="button" onClick={() => console.log("Dashboard!")}>
              Continue to Dashboard <i className="fas fa-angle-right" />
            </button>
          </>
        )}
      </>
    );
  }
}

export default injectStripe(SubForm);
