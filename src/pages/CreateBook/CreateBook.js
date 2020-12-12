import React, { Component } from "react";
import { Link } from "react-router-dom";
import { StyledLinkBtn } from "./../../components/LinkBtn";

export default class CreateBook extends Component {
  render() {
    return (
      <div>
        Hello from CreateBook
        <Link to={"/mybook"}>
          <StyledLinkBtn>CREATE</StyledLinkBtn>
        </Link>
      </div>
    );
  }
}
