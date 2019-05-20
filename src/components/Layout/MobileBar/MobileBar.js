import React, { Component } from "react";
import classes from "./MobileBar.module.scss";
import { withRouter } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

class MobileBar extends Component {
  state = { visible: false };
  mobileBarRef = React.createRef();
  componentDidMount() {
    this.mobileBarRef.current.addEventListener("click", e => {
      //If click occurs on shadow, toggle sidebar closed
      const { className } = e.target;
      if (className.includes("shadow") || className.includes("container")) {
        this.setState({ visible: false });
      }
    });
  }

  componentDidUpdate(prevProps) {
    //User clicks on different route, hide sidebar
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ visible: false });
    }
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
export default withRouter(MobileBar);
