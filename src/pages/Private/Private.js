import React, { Component } from "react";
import { withAuth } from "../../context/auth-context";

class Private extends Component {
  render() {
    return (
      <div>
        <h2>Welcome {this.props.user && this.props.user.username}</h2>
      </div>
    );
  }
}

export default withAuth(Private);
