import React, { Component } from "react";
import { withAuth } from "../../context/auth-context";
import bookService from "../../lib/book-service";
import Navbar from "../../components/Navbar";
import "./Start.css";
import { Link } from "react-router-dom";

class Start extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    bookService.getAllPublicBooks().then((publicList) => {
      console.log("publicList", publicList);

      this.setState({ books: publicList[0].books });
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <h2>Welcome {this.props.user && this.props.user.username}</h2>
        <div className="action-books">
          {books.map((book, i) => {
            return (
              <Link key={i} to={`/bookdetails/${book._id}`}>
                <h1>{book.title}</h1>;
              </Link>
            );
          })}
        </div>

        <Navbar />
      </div>
    );
  }
}

export default withAuth(Start);
