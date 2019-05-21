import React, { Component } from "react";
import classes from "./Prompts.module.scss";
import { Route } from "react-router-dom";
import PromptHome from "./PromptHome";
import CategoryPage from "./CategoryPage";

export default class Prompts extends Component {
  render() {
    return (
      <div className={classes.container}>
        <Route path="/prompts" exact component={PromptHome} />
        <Route path="/prompts/fun" component={CategoryPage} />
        <Route path="/prompts/romantic" component={CategoryPage} />
        <Route path="/prompts/intimate" component={CategoryPage} />
      </div>
    );
  }
}
