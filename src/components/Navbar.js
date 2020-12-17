import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../context/auth-context";
import "../App.css";

class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <Link className="navbar-link" to={"/dashboard"} id="dashboard-btn">
          <h4>Dashboard</h4>
        </Link>
        <Link className="navbar-link" to={"/profile"} id="profile-btn">
          <h4>Profile</h4>
        </Link>
        <Link className="navbar-link" to={"/start"} id="start-btn">
          <h4>Start</h4>
        </Link>
        <Link className="navbar-link" to={"/createBook"} id="plus-btn">
          <h4>+</h4>
        </Link>
      </nav>
    );
  }
}

export default withAuth(Navbar);
