import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import bookService from "../../lib/book-service";
import { StyledLinkBtn } from "../../components/LinkBtn";
import { Link } from "react-router-dom";

export default class MyBook extends Component {
  state = {
    book: "",
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    bookService.getOneBook(id).then((book) => this.setState(book));
  }

  render() {
    const { book } = this.state;
    console.log("book", book);
    return (
      <div>
        Hello from MyBook
        {/* <img src={book.coverImage} /> */}
        <h1>{book.title}</h1>
        <StyledLinkBtn>
          <Link to={`/write/${book._id}`}>Edit/create-first-page</Link>
        </StyledLinkBtn>
        <button>upload</button>
        <button>delete</button>
        <Navbar />
      </div>
    );
  }
}
