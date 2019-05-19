import React, { Component } from "react";
import classes from "./MobileBar.module.scss";
import Sidebar from "./Sidebar/Sidebar";

export default class MobileBar extends Component {
  state = { visible: false };
  toggleSidebar = () => {
    this.setState(state => {
      return { visible: !state.visible };
    });
  };
  render() {
    const { visible } = this.state;
    return (
      <div className={classes.outerContainer}>
        <div className={classes.container}>
          <h1>Bundle of Sage</h1>
          <i className="fas fa-equals" onClick={this.toggleSidebar} />
        </div>
        {visible && <Sidebar />}
      </div>
    );
  }
}
