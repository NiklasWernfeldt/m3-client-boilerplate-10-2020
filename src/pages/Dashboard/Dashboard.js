import React, { Component } from "react";
import { withAuth } from "../../context/auth-context";
import bookService from "../../lib/book-service";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

class Dashboad extends Component {
  state = {
    user: this.props.user,
    myBooks: "",
  };

  componentDidMount() {
    bookService.getMyBooks().then((books) => {
      this.setState({ myBooks: books });
    });
  }

  render() {
    const { user, myBooks } = this.state;
    console.log("myBooks", myBooks);
    console.log("user", user);
    console.log(user.ownBooks);
    console.log(user.favoriteBooks);
    console.log(user.nowReading);
    console.log(user.readList);
    // NOTE: har inget med denna comp att göra, insert docs
    return (
      <div>
        <h1>My books</h1>
        {myBooks.ownBooks
          ? myBooks.ownBooks.map((book, i) => {
              return (
                <div>
                  <Link
                    className="dashboard-link"
                    key={i}
                    to={`/mybook/${book._id}`}
                  >
                    <p>{book.title}</p>
                  </Link>
                </div>
              );
            })
          : null}
        <h1>Reading</h1>
        {myBooks.nowReading
          ? myBooks.nowReading.map((book, i) => {
              return (
                <div>
                  <Link
                    className="dashboard-link"
                    key={i}
                    to={`/mybook/${book._id}`}
                  >
                    <h2>{book.title}</h2>
                  </Link>
                </div>
              );
            })
          : null}
        <h1>My favorite books</h1>
        {myBooks.favoriteBooks
          ? myBooks.favoriteBooks.map((book, i) => {
              return (
                <div>
                  <Link
                    className="dashboard-link"
                    key={i}
                    to={`/mybook/${book._id}`}
                  >
                    <h3>{book.title}</h3>
                  </Link>
                </div>
              );
            })
          : null}
        <h1>Books to read</h1>
        {myBooks.readList
          ? myBooks.readList.map((book, i) => {
              return (
                <div>
                  <Link
                    className="dashboard-link"
                    key={i}
                    to={`/mybook/${book._id}`}
                  >
                    <h4>{book.title}</h4>
                  </Link>
                </div>
              );
            })
          : null}
        <Navbar />
      </div>
    );
  }
}

export default withAuth(Dashboad);
