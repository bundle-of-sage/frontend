import React from "react";
import classes from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <>
      <div className={classes.shadow} />
      <div className={classes.sidebar}>
        <p>Menu Item</p>
        <p>Menu Item</p>
        <p>Menu Item</p>
        <p>Menu Item</p>
      </div>
      ;
    </>
  );
}
