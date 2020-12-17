import React, { Component } from "react";
import { withAuth } from "../../context/auth-context";
import Navbar from "../../components/Navbar";
import userService from "../../lib/user-service";
import authService from "../../lib/auth-service";

// do the logic for totalCashEarned

class Profile extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
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
      .then((updatedUser) => {
        console.log("user info updated");
        userService.getUserInfo(this.props.user._id).then((user) =>
          this.setState({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password,
            profileImage: user.profileImage,
          })
        );
      });
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

  handleLogout = () => {
    this.props.logout();
    // this.props.history.push("/");
  };

  render() {
    const {
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
        <button onClick={this.handleLogout}>Logout</button>
        <Navbar />
      </div>
    );
  }

  componentDidMount() {
    userService.getUserInfo(this.props.user._id).then((user) => {
      // GET THIS COMPONENT TO DISPLAY CORRECT USER INFO
      console.log(user);
      this.setState({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        profileImage: user.profileImage,
      });
    });
  }
}

export default withAuth(Profile);
