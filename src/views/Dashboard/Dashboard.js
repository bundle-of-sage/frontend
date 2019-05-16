import React, { Component } from "react";
import classes from "./Dashboard.module.scss";
import { connect } from "react-redux";
import { getUserProfile } from "../../store/actions/userActions";

class Dashboard extends Component {
  async componentDidMount() {
    await this.props.getUserProfile();
  }
  render() {
    return <div className={classes.container}>Dashboard</div>;
  }
}

export default connect(
  null,
  { getUserProfile }
)(Dashboard);
