import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleForm = (event) => {
    alert(this.state.username + "--" + this.state.password);
    // event.preventDefault();
  };
  handlePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  UserName = () => {
    return (
      <input
        type="text"
        value={this.state.username}
        onChange={this.handleUserName}
      />
    );
  };
  passwd = () => {
    return (
      <input
        type="password"
        value={this.state.password}
        onChange={this.handlePassword}
      />
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleForm}>
          <this.UserName />
          <this.passwd />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
