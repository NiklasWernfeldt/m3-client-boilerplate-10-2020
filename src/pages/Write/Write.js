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
      console.log(book);
      this.setState({ book, pages: book.pages });
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
        {editMode ? (
          <EditPage page={pageObj} />
        ) : (
          <p>{pageObj ? pageObj.text : ""}</p>
        )}
        <p>Page: {pageNr}</p>
        <button onClick={this.handlePageIncrease}>Next page</button>
        <button onClick={this.handlePageDecrease}>Prev page</button>
        {editMode ? (
          <button onClick={() => this.setState({ editMode: false })}>
            {" "}
            Close Editor
          </button>
        ) : (
          <button onClick={() => this.setState({ editMode: true })}>
            Edit Page
          </button>
        )}
        <Navbar />
      </div>
    );
  }
}

export default Write;

class EditPage extends React.Component {
  state = {
    text: "",
  };

  handleText = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    this.setState({ text: this.props.page.text });
  }

  render() {
    return (
      <form>
        <textarea
          name="text"
          value={this.state.text}
          cols="30"
          rows="10"
          onChange={this.handleText}
        />
      </form>
    );
  }
}
