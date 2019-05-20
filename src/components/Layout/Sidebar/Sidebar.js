import React, { Component } from "react";
import classes from "./Sidebar.module.scss";
import { connect } from "react-redux";
import Navbar from "../Navbar/Navbar";

class Sidebar extends Component {
  render() {
    return (
      <div className={classes.container}>
        <h1 className={classes.logoText}>Bundle of Sage</h1>
        <Navbar />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { photoUrl: state.user.profile_photo_url };
}
export default connect(mapStateToProps)(Sidebar);
