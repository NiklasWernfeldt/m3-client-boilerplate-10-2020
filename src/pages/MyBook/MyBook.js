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
    console.log(id);
    bookService.getOneBook(id).then((book) => {
      this.setState({ book });
    });
  }

  handleUploadBook = () => {
    const { book } = this.state;
    const { id } = this.props.match.params;
    bookService
      .uploadNewBook(id, book)
      .then(() => console.log("uploaded new book"));
  };

  editBook = () => {
    // redirect to the last written page
  };

  /* createPage = () => {
    const { id } = this.props.match.params;

    bookService
      .createThePage(id, {
        text: "write here",
        pageImage: "",
      })
      .then(() => {
        this.props.history.push(`/write/${id}`);
        console.log("created a new page");
      });
  }; */

  render() {
    const { book } = this.state;

    console.log("book", book);
    return (
      <div>
        {/* <img src={book.coverImage} /> */}
        <h1>Book title: {book.title}</h1>
        <StyledLinkBtn>
          <Link to={`/write/${book._id}`}>Edit/create-first-page</Link>
        </StyledLinkBtn>
        {/*book.pages && book.pages[0] ? (
          <StyledLinkBtn>
            {" "}
            <button onClick={this.editBook}>Edit</button>{" "}
          </StyledLinkBtn>
        ) : (
          <StyledLinkBtn>
            {" "}
            <button onClick={this.createPage}>Create</button>
          </StyledLinkBtn>
        )*/}
        <button onClick={this.handleUploadBook}>upload</button>
        <button>delete</button>
        <Navbar />
      </div>
    );
  }
}
