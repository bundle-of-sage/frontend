import React, { Component } from "react";
import classes from "./Sidebar.module.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className={classes.container}>
        <h1 className={classes.logoText}>Bundle of Sage</h1>
        <nav className={classes.navbar}>
          <Link to="/">
            <p>Dashboard</p>
          </Link>
          <Link to="/prompts">
            <p>Prompts</p>
          </Link>
          <Link to="/seo">
            <p>SEO</p>
          </Link>
          <Link to="/business">
            <p>Business</p>
          </Link>
          <Link to="/sessionux">
            <p>Session Experience</p>
          </Link>
        </nav>
        {/* {photoUrl && (
          <img src={photoUrl} className={classes.avatar} alt="profile" />
        )} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { photoUrl: state.user.profile_photo_url };
}
export default connect(mapStateToProps)(Sidebar);
