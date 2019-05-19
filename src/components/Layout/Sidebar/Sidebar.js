import React, { Component } from "react";
import classes from "./Sidebar.module.scss";
import { connect } from "react-redux";

class Sidebar extends Component {
  render() {
    const { photoUrl } = this.props;
    return (
      <div className={classes.container}>
        <h1 className={classes.logoText}>
          {photoUrl && (
            <img src={photoUrl} className={classes.avatar} alt="profile" />
          )}
          Bundle of Sage
        </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { photoUrl: state.user.profile_photo_url };
}
export default connect(mapStateToProps)(Sidebar);
