import React, { Component } from "react";
import { withAuth } from "../../context/auth-context";
import Navbar from "../../components/Navbar";
import userService from "../../lib/user-service";

// do the logic for totalCashEarned

class Profile extends Component {
  state = {
    firstname: this.props.user.firstname,
    lastname: this.props.user.lastname,
    email: this.props.user.email,
    password: this.props.user.password,
    profileImage: "",
    totalCashEarned: "",
    totalViews: 0,
    toggleFirstnameReadOnly: false,
    toggleLastnameReadOnly: false,
    toggleEmailReadOnly: false,
    togglePasswordReadOnly: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    userService
      .updateUserInfo(
        {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          password: this.state.password,
          profileImage: this.state.profileImage,
        },
        this.props.user._id
      )
      .then((updatedUser) => console.log("user info updated"));
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleEditFieldFirstname = (event) => {
    this.setState({
      toggleFirstnameReadOnly: !this.state.toggleFirstnameReadOnly,
    });
  };

  handleEditFieldLastname = (event) => {
    this.setState({
      toggleLastnameReadOnly: !this.state.toggleLastnameReadOnly,
    });
  };

  handleEditFieldEmail = (event) => {
    this.setState({
      toggleEmailReadOnly: !this.state.toggleEmailReadOnly,
    });
  };

  handleEditFieldPassword = (event) => {
    this.setState({
      togglePasswordReadOnly: !this.state.togglePasswordReadOnly,
    });
  };

  render() {
    const { user } = this.props;
    const {
      firstname,
      lastname,
      email,
      password,
      profileImage,
      totalCashEarned,
      totalViews,
      toggleFirstnameReadOnly,
      toggleLastnameReadOnly,
      toggleEmailReadOnly,
      togglePasswordReadOnly,
    } = this.state;
    return (
      <div>
        Hola from Profile
        <form onSubmit={this.handleSubmit}>
          {toggleFirstnameReadOnly ? (
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleInput}
            />
          ) : (
            <input
              readOnly
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleInput}
            />
          )}
          <p onClick={this.handleEditFieldFirstname}>EditBtn</p>
          {toggleLastnameReadOnly ? (
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleInput}
            />
          ) : (
            <input
              readOnly
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleInput}
            />
          )}
          <p onClick={this.handleEditFieldLastname}>EditBtn</p>
          {toggleEmailReadOnly ? (
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          ) : (
            <input
              readOnly
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
            />
          )}
          <p onClick={this.handleEditFieldEmail}>EditBtn</p>
          {togglePasswordReadOnly ? (
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          ) : (
            <input
              readOnly
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
            />
          )}
          <p onClick={this.handleEditFieldPassword}>EditBtn</p>
          <input type="submit" value="Save" />
        </form>
        <Navbar />
      </div>
    );
  }
}

export default withAuth(Profile);
