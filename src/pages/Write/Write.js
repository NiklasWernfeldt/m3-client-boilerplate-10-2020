import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import bookService from "../../lib/book-service";
class Write extends Component {
  state = {
    book: "",
    pageNr: 1,
    editMode: false,
    pages: [],
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    bookService.getOneBook(id).then((book) => {
      this.setState({ book, pages: book.book.pages });
    });
  }

  handlePageIncrease = () => {
    this.setState({ pageNr: this.state.pageNr + 1 });
  };

  handlePageDecrease = () => {
    this.setState({ pageNr: this.state.pageNr - 1 });
  };

  render() {
    const { book, pageNr, editMode, pages } = this.state;

    let pageObj = pages.find((page) => page.pageNumber === pageNr);

    console.log("pageObj", pageObj);
    return (
      <div>
        Hello from Write mode page
        {/* editMode ? null : <p>{pageObj.text}</p> */}
        <p>Page: {pageNr}</p>
        <button onClick={this.handlePageIncrease}>Next page</button>
        <button onClick={this.handlePageDecrease}>Prev page</button>
        <Navbar />
      </div>
    );
  }
}

export default Write;
