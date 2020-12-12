import React, { Component } from "react";
import { withAuth } from "../../context/auth-context";
import bookService from "../../lib/book-service";
import Navbar from "../../components/Navbar";

class Private extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    bookService.getAllBooks().then((books) => {
      this.setState({ books: books[0].books });
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <Navbar />
        <h2>Welcome {this.props.user && this.props.user.username}</h2>
        {books.map((book, i) => {
          return <h1 key={i}>{book.title}</h1>;
        })}
      </div>
    );
  }
}

export default withAuth(Private);
