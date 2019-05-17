import React, { Component } from "react";
import classes from "./SubForm.module.scss";
import { CardElement } from "react-stripe-elements";

export default class CardSection extends Component {
  cardRef = React.createRef();
  render() {
    return (
      <div className={classes.cardElement}>
        <CardElement
          ref={this.cardRef}
          style={{ base: { fontSize: "16px", fontFamily: "Open Sans" } }}
        />
      </div>
    );
  }
}
