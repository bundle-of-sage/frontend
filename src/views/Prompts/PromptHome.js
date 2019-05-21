import React from "react";
import classes from "./Prompts.module.scss";
import { Link } from "react-router-dom";

export default function PromptHome() {
  return (
    <>
      <h1>Prompts</h1>
      <Link to="/prompts/fun">
        <div className={classes.category} style={{ background: "#97422b" }}>
          <h1>Fun</h1>
        </div>
      </Link>
      <Link to="/prompts/romantic">
        <div className={classes.category} style={{ background: "#c17c5b" }}>
          <h1>Romantic</h1>
        </div>
      </Link>
      <Link to="/prompts/intimate">
        <div className={classes.category} style={{ background: "#fcd0b3" }}>
          <h1>Intimate</h1>
        </div>
      </Link>
    </>
  );
}
