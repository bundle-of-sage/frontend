import React, { Component } from "react";
import classes from "./Prompts.module.scss";
import {
  funPrompts,
  romanticPrompts,
  intimatePrompts
} from "../../utils/PromptsList";

export default class Prompts extends Component {
  render() {
    return (
      <div className={classes.container}>
        <h1>Prompts</h1>
        <div className={classes.promptCard}>
          <div className={classes.promptHeader}>Romantic</div>
          <p className={classes.promptText}>
            Guy: lay down and raise your legs in the air. Girl: climb on so your
            hips are resting on his feet and grab his hands for support. Fly her
            around like an airplane, sound effects are encouraged.
          </p>
        </div>
      </div>
    );
  }
}
