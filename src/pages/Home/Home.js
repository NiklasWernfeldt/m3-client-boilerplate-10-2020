import React from "react";
import bookstoreImg from "./../../images/bookstore.jpg";
import "./Home.css";
import { Section } from "../../components/Section";
import { Hero } from "../../components/Hero";
import { StyledLinkBtn } from "../../components/LinkBtn";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Hero>
        <img src={bookstoreImg} alt="" />
        <p>Write and publish books online for free</p>
        <Link to="/login">
          <StyledLinkBtn>Start</StyledLinkBtn>
        </Link>
      </Hero>
      <Section bgColor="blue" />
      <Section bgColor="green" />
    </div>
  );
}

export default Home;
