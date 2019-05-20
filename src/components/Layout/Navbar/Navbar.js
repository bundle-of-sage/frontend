import React from "react";
import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
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
  );
}
