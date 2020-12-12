import React, { Component } from "react";
import { withAuth } from "../../context/auth-context";
import bookService from "../../lib/book-service";
import Navbar from "../../components/Navbar";
import "./Start.css";

class Start extends Component {
  state = {
    actionBooks: [],
    fantasyBooks: [],
  };

  componentDidMount() {
    bookService.getAllBooks().then((books) => {
      const actionBooks = books[0].books.filter(
        (book) => book.genre === "action"
      );

      const fantasyBooks = books[0].books.filter(
        (book) => book.genre === "fantasy"
      );

      this.setState({ actionBooks, fantasyBooks });
    });
  }

  render() {
    const { actionBooks, fantasyBooks } = this.state;
    return (
      <div>
        <Navbar />
        <h2>Welcome {this.props.user && this.props.user.username}</h2>
        <div className="action-books">
          {actionBooks.map((book, i) => {
            return <h1 key={i}>{book.title}</h1>;
          })}
        </div>
        <div className="fantasy-books">
          {fantasyBooks.map((book, i) => {
            return <h1 key={i}>{book.title}</h1>;
          })}
        </div>
      </div>
    );
  }
}

export default withAuth(Start);
