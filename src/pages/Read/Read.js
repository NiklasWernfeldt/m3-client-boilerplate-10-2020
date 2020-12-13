import React, { Component } from "react";
import bookService from "../../lib/book-service";
import Navbar from "../../components/Navbar";

export default class Read extends Component {
  state = {
    book: "",
    pageNr: 1,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    bookService.getOneBook(id).then((book) => {
      this.setState(book);
    });
  }

  handlePageIncrease = () => {
    this.setState({ pageNr: this.state.pageNr + 1 });
  };

  handlePageDecrease = () => {
    this.setState({ pageNr: this.state.pageNr - 1 });
  };

  render() {
    const { book, pageNr } = this.state;
    let pageObj;
    if (book) {
      pageObj = book.pages.find((page) => page.pageNumber === pageNr);
    }
    console.log(pageNr);
    console.log(book.pages);
    console.log("pageObj", pageObj);

    return (
      <div>
        {book.title}
        {pageObj ? <p>{pageObj.text}</p> : null}
        <p>Page: {pageNr}</p>
        <button onClick={this.handlePageIncrease}>Next page</button>
        <button onClick={this.handlePageDecrease}>Prev page</button>
        <Navbar />
      </div>
    );
  }
}
