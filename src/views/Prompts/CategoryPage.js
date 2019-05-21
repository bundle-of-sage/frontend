import React from "react";
import classes from "./Prompts.module.scss";
import {
  funPrompts,
  romanticPrompts,
  intimatePrompts
} from "../../utils/PromptsList";
import PromptCard from "./PromptCard";

export default function CategoryPage(props) {
  const { pathname } = props.location;
  const promptList = pathname.includes("fun")
    ? funPrompts
    : pathname.includes("romantic")
    ? romanticPrompts
    : intimatePrompts;

  return (
    <div className={classes.categoryPageContainer}>
      {promptList.map((prompt, index) => {
        return <PromptCard prompt={prompt} key={index} />;
      })}
    </div>
  );
}
