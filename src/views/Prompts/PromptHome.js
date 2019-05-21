import React from "react";
import classes from "./Prompts.module.scss";
import { Link } from "react-router-dom";

export default function PromptHome() {
  return (
    <>
      <h1>Prompts</h1>
      <p className={classes.mainDescription}>
        Our session experience guide will help you unearth your couples' true
        colors. Use the categories below to discover and lead your clients for a
        more natural session.
      </p>
      <Link to="/prompts/fun">
        <div className={classes.category} data-color="dark-orange">
          <h1>Fun</h1>
        </div>
      </Link>
      <Link to="/prompts/romantic">
        <div className={classes.category} data-color="light-orange">
          <h1>Romantic</h1>
        </div>
      </Link>
      <Link to="/prompts/intimate">
        <div className={classes.category} data-color="apricot">
          <h1>Intimate</h1>
        </div>
      </Link>
    </>
  );
}
