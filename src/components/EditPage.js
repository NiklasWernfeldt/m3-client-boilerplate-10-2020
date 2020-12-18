import React from "react";
import authorService from "../lib/author-service";
import Write from "../pages/Write/Write";

class EditPage extends React.Component {
  state = {
    text: "",
  };

  handleText = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    if (this.props.page) {
      this.setState({ text: this.props.page.text });
    }
    this.setState({ text: "" });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { text, id } = this.state;

    if (this.props.page) {
      authorService.savePage(this.props.page._id, { text }).then(() => {
        this.props.handleSavePage();
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          name="text"
          value={this.state.text}
          cols="30"
          rows="10"
          onChange={this.handleText}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default EditPage;
