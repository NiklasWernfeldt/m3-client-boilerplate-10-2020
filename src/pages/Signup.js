import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../context/auth-context";

class Signup extends Component {
  state = { firstname: "", lastname: "", email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { firstname, lastname, email, password } = this.state;

    this.props.signup(firstname, lastname, email, password);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstname, lastname, email, password } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label>Firstname:</label>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={this.handleChange}
          />

          <label>Lastname:</label>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={this.handleChange}
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />

          <input type="submit" value="Signup" />
        </form>

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);

// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;
