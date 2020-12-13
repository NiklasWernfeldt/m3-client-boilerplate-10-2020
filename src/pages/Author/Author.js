import React, { Component } from "react";
import authorService from "../../lib/author-service";
import Navbar from "../../components/Navbar";
export default class Author extends Component {
  state = {
    author: "",
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    authorService.getAuthor(id).then((author) => {
      this.setState({ author });
    });
  }

  render() {
    console.log("state", this.state.author);
    const { author } = this.state;
    return (
      <div>
        Hello from Auhtor page
        {/*<img src={author.user.profileImage} /> not created the profileImage field since no pic is uploaded */}
        {author
          ? author.user.ownBooks.map((book, i) => {
              return <h1 key={i}>{book.title}</h1>;
            })
          : null}
        <Navbar />
      </div>
    );
  }
}
