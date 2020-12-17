import React, { Component } from "react";
import bookService from "../../lib/book-service";
import axios from "axios";

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

  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files);
    const file = e.target.files[0];

    const uploadData = new FormData();
    // image => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new project in '/api/projects' POST route
    uploadData.append("image", file);

    axios
      .post("http://localhost:5000/api/book/upload", uploadData, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ coverImage: response.data.secure_url });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
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
            Cover <img src={this.state.coverImage} />
            <input type="file" name="image" onChange={this.handleFileUpload} />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
