import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import bookService from "../../lib/book-service";
import EditPage from "../../components/EditPage";

class Write extends Component {
  state = {
    book: "",
    pageNr: 1,
    editMode: false,
    pages: [],
    bookId: "",
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    bookService.getOneBook(id).then((book) => {
      console.log("book", book);
      this.setState({ book, pages: book.pages, bookId: id });
    });
  }

  handlePageIncrease = () => {
    this.setState({ pageNr: this.state.pageNr + 1 });
    //  bookService.updateLastViewedPage(this.state.pageNr + 1)
  };

  handlePageDecrease = () => {
    this.setState({ pageNr: this.state.pageNr - 1 });
  };

  handleEditPage = () => {
    this.setState({ editMode: true });
    console.log("editpagefu");
  };

  handleSavePage = () => {
    this.setState({ editMode: false });

    // Updates the component with the edited text
    const { id } = this.props.match.params;
    bookService.getOneBook(id).then((book) => {
      console.log("book", book);
      this.setState({ book, pages: book.pages, bookId: id });
    });
    console.log("savepagefu");
  };

  render() {
    const { book, pageNr, editMode, pages } = this.state;

    let pageObj = pages.find((page) => page.pageNumber === pageNr);
    console.log("pages", pages);
    console.log("pageObj", pageObj);
    return (
      <div>
        Hello from Write mode page
        {editMode ? (
          <EditPage
            page={pageObj}
            bookId={this.state.bookId}
            handleSavePage={this.handleSavePage}
          />
        ) : (
          <p>{pageObj ? pageObj.text : ""}</p>
        )}
        <p>Page: {pageNr}</p>
        <button onClick={this.handlePageIncrease}>Next page</button>
        <button onClick={this.handlePageDecrease}>Prev page</button>
        {editMode ? null : (
          <button onClick={this.handleEditPage}>Edit Page</button>
        )}
        <Navbar />
      </div>
    );
  }
}

export default Write;
