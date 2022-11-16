import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }
  handleUserChange = (event) => {
    this.setState({ username: event.target.value });
  };
  handleChangComments = (event) => {
    this.setState({ comments: event.target.value });
  };
  handleOnTopic = (event) => {
    this.setState({ topic: event.target.value });
  };
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    const { username, topic, comments } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUserChange}
            ></input>
          </div>
          <div>
            <label>comments</label>
            <textarea
              value={this.state.comments}
              onChange={this.handleChangComments}
            ></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleOnTopic}>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
