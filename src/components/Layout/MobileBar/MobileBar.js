import React, { Component } from "react";
import classes from "./MobileBar.module.scss";
import Sidebar from "./Sidebar/Sidebar";

export default class MobileBar extends Component {
  state = { visible: false };
  mobileBarRef = React.createRef();
  componentDidMount() {
    this.mobileBarRef.current.addEventListener("click", e => {
      //If click occurs on shadow, toggle sidebar closed
      const { className } = e.target;
      if (className.includes("shadow")) {
        this.setState({ visible: false });
      }
    });
  }
  toggleSidebar = () => {
    this.setState(state => {
      return { visible: !state.visible };
    });
  };
  render() {
    const { visible } = this.state;
    return (
      <div className={classes.outerContainer} ref={this.mobileBarRef}>
        <div className={classes.container}>
          <h1>Bundle of Sage</h1>
          <i className="fas fa-equals" onClick={this.toggleSidebar} />
        </div>
        {visible && <Sidebar />}
      </div>
    );
  }
}
