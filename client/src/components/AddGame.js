import React, { Component } from "react";
import axios from "axios";
class AddGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      price: 0,
      coverLink: "",
      console: ""
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCoverLinkChange = this.handleCoverLinkChange.bind(this);
    this.handleConsoleChange = this.handleConsoleChange.bind(this);
    this.handleGameSubmit = this.handleGameSubmit.bind(this);
  }
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handlePriceChange(e) {
    this.setState({ price: e.target.value });
  }
  handleCoverLinkChange(e) {
    this.setState({ coverLink: e.target.value });
  }
  handleConsoleChange(e) {
    this.setState({ console: e.target.value });
  }
  handleGameSubmit = event => {
    event.preventDefault();
    axios
      .post("/api/add_game_db", {
        title: this.state.title,
        price: this.state.price,
        coverLink: this.state.coverLink,
        console: this.state.console
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleGameSubmit}>
        <label>
          Game Title:
          <input
            name="title"
            type="text"
            placeholder="Title"
            onChange={this.handleTitleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            name="price"
            type="number"
            placeholder={this.state.price}
            onChange={this.handlePriceChange}
          />
        </label>
        <label>
          Cover Link:
          <input
            name="coverLink"
            type="text"
            placeholder="Link to cover"
            onChange={this.handleCoverLinkChange}
          />
        </label>
        <label>
          Console:
          <input
            name="console"
            type="text"
            placeholder="Console"
            onChange={this.handleConsoleChange}
          />
        </label>
        <label>
          <input type="submit" value="Add Game" />
        </label>
      </form>
    );
  }
}

export default AddGame;
