import React, { Component } from "react";
import classes from "./Prompts.module.scss";
import CategoryPage from "./CategoryPage";

export default class Prompts extends Component {
  render() {
    return (
      <div className={classes.container}>
        <h1>Prompts</h1>
        <div className={classes.category} style={{ background: "#97422b" }}>
          <h1>Fun</h1>
        </div>
        <div className={classes.category} style={{ background: "#c17c5b" }}>
          <h1>Romantic</h1>
        </div>
        <div className={classes.category} style={{ background: "#fcd0b3" }}>
          <h1>Intimate</h1>
        </div>
      </div>
    );
  }
}
