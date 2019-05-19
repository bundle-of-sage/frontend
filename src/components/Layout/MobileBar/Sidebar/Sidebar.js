import React from "react";
import classes from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <>
      <div className={classes.sidebarShadow} />
      <div className={classes.sidebar}>Sidebar Content</div>;
    </>
  );
}
