import React from "react";
import classes from "./Prompts.module.scss";

export default function PromptCard() {
  return (
    <div className={classes.promptCard}>
      <div className={classes.promptHeader}>Romantic</div>
      <p className={classes.promptText}>
        Guy: lay down and raise your legs in the air. Girl: climb on so your
        hips are resting on his feet and grab his hands for support. Fly her
        around like an airplane, sound effects are encouraged.
      </p>
    </div>
  );
}
