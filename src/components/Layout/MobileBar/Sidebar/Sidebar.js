import React from "react";
import classes from "./Sidebar.module.scss";
import Navbar from "../../Navbar/Navbar";

export default function Sidebar() {
  return (
    <>
      <div className={classes.shadow} />
      <div className={classes.sidebar}>
        <Navbar />
      </div>
    </>
  );
}
