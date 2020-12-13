import React, { Component } from "react";
import bookService from "../../lib/book-service";

export default class BookDetails extends Component {
  state = {
    book: null,
  };

  componentDidMount() {
    const id = this.props.match.params;
    bookService.getOneBook(id).then((book) => {
      console.log("book", book);
      this.setState({ book });
    });
  }

  render() {
    const { book } = this.state;
    console.log(book);
    return <div>Hola from BookDetails</div>;
  }
}
