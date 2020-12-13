import React, { Component } from "react";
import bookService from "../../lib/book-service";
import { Link } from "react-router-dom";
import { StyledLinkBtn } from "../../components/LinkBtn";
import Navbar from "../../components/Navbar";
export default class BookDetails extends Component {
  state = {
    book: "",
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    bookService.getOneBook(id).then((book) => {
      this.setState(book);
    });
  }

  handleAddToFavorites = () => {
    const { id } = this.props.match.params;

    bookService.addToFavorite(id).then(() => console.log("new favorite book"));
  };

  handleAddToReadLater = () => {
    const { id } = this.props.match.params;

    bookService
      .addToReadList(id)
      .then(() => console.log("new book in readlist"));
  };

  render() {
    const { book } = this.state;
    return (
      <div>
        <h1>Book title: {book.title}</h1>
        {book ? (
          <p>
            author:
            <Link to={`/author/${book.author._id}`}>
              {book.author.firstname} {book.author.lastname}
            </Link>
          </p>
        ) : null}
        <StyledLinkBtn>
          <Link to={`/read/${book._id}`}>Read now</Link>
        </StyledLinkBtn>
        <button onClick={this.handleAddToFavorites}>Favorite</button>
        <button onClick={this.handleAddToReadLater}>Read later</button>
        <Navbar />
      </div>
    );
  }
}
