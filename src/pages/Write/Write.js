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
    showNext: false,
    showPrev: false,
    newPage: false,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    bookService.getOneBook(id).then((book) => {
      console.log("book", book);
      const nextPageExists = book.pages[1] !== undefined;
      this.setState({
        book,
        pages: book.pages,
        bookId: id,
        showPrev: false,
        showNext: nextPageExists,
      });
    });
  }

  handlePageIncrease = () => {
    const nextPageNr = this.state.pageNr + 1;
    const nextPageExists = this.state.book.pages[nextPageNr] !== undefined;

    this.setState({
      pageNr: nextPageNr,
      showNext: nextPageExists,
      showPrev: true,
    });
    //  bookService.updateLastViewedPage(this.state.pageNr + 1)
  };

  handlePageDecrease = () => {
    const currentPage = this.state.pageNr;
    const prevPageExists = currentPage > 1;

    this.setState({
      pageNr: this.state.pageNr - 1,
      showNext: true,
      showPrev: prevPageExists,
    });
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

  newPage = () => {
    const { pageNr, bookId, newPage } = this.state;
    this.setState({ newPage: !newPage, pageNr: pageNr + 1 });
  };

  render() {
    const {
      book,
      pageNr,
      editMode,
      pages,
      showNext,
      showPrev,
      newPage,
    } = this.state;

    let pageObj = pages.find((page) => page.pageNumber === pageNr);
    console.log("pages", pages);
    console.log("pageObj", pageObj);
    return (
      <div>
        Hello from Write mode page
        {editMode || newPage ? (
          <EditPage
            page={pageObj}
            bookId={this.state.bookId}
            handleSavePage={this.handleSavePage}
          />
        ) : (
          <p>{pageObj ? pageObj.text : ""}</p>
        )}
        <p>Page: {pageNr}</p>
        {showNext && (
          <button onClick={this.handlePageIncrease}>Next page</button>
        )}
        {showPrev && (
          <button onClick={this.handlePageDecrease}>Prev page</button>
        )}
        {editMode ? null : (
          <button onClick={this.handleEditPage}>Edit Page</button>
        )}
        {!showNext && <button onClick={this.newPage}>New page</button>}
        <Navbar />
      </div>
    );
  }
}

export default Write;
