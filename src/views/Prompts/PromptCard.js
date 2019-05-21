import React from "react";
import classes from "./Prompts.module.scss";

export default function PromptCard({ prompt: { prompt } }) {
  return (
    <div className={classes.promptCard}>
      <div className={classes.promptHeader}>Romantic</div>
      <p className={classes.promptText}>{prompt}</p>
    </div>
  );
}
