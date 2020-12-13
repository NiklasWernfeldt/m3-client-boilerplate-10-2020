import React, { Component } from "react";
import bookService from "../../lib/book-service";

export default class CreateBook extends Component {
  state = {
    title: "",
    description: "",
    genre: "action",
    coverImage: "",
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSumbit = (event) => {
    const { title, description, genre, coverImage } = this.state;
    event.preventDefault();
    bookService
      .createBook({ title, description, genre, coverImage })
      .then((createdBook) => {
        console.log("createdBook", createdBook);
        const newBookId = createdBook.data.updatedUser.ownBooks.pop();
        console.log("newBookId", newBookId);
        this.props.history.push(`/mybook/${newBookId}`);
      })
      .catch((err) => console.log(err));
  };

  handleChange = (event) => {
    this.setState({ genre: event.target.value });
  };

  render() {
    return (
      <div>
        Hello from CreateBook
        <form onSubmit={this.handleSumbit}>
          <label>
            Title{" "}
            <input
              name="title"
              value={this.state.title}
              type="text"
              onChange={this.handleInput}
            />
          </label>

          <label>
            Description{" "}
            <input
              name="description"
              value={this.state.description}
              type="text"
              onChange={this.handleInput}
            />
          </label>

          <label>
            Genre{" "}
            <select value={this.state.option} onChange={this.handleChange}>
              <option value="action">Action</option>
              <option value="fantasy">Fantasy</option>
              <option value="biography">Biography</option>
              <option value="comics">Comics</option>
            </select>
          </label>

          <label>
            Cover <input />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
