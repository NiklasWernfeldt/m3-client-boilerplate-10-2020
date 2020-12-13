import React, { Component } from "react";
import bookService from "../../lib/book-service";
import { Link } from "react-router-dom";
import { StyledLinkBtn } from "../../components/LinkBtn";
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

  render() {
    const { book } = this.state;
    console.log("book", book);
    return (
      <div>
        {book ? (
          <p>
            author:{" "}
            <Link to={`/author/${book.author._id}`}>
              {book.author.firstname} {book.author.lastname}
            </Link>
          </p>
        ) : null}
        <StyledLinkBtn>
          <Link to={`/read/${book._id}`}>Read now</Link>
        </StyledLinkBtn>
      </div>
    );
  }
}
