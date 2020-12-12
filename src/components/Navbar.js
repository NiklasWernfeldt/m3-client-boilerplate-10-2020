import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../context/auth-context";

class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <Link to={"/dashboard"} id="dashboard-btn">
          <h4>Dashboard</h4>
        </Link>
        <Link to={"/profile"} id="profile-btn">
          <h4>Profile</h4>
        </Link>
        <Link to={"/start"} id="start-btn">
          <h4>Start</h4>
        </Link>
        <Link to={"/createBook"} id="plus-btn">
          <h4>+</h4>
        </Link>
      </nav>
    );
  }
}

export default withAuth(Navbar);
