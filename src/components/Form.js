import React, { Component } from 'react'
import { Redirect } from "react-router-dom";


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isUser: false,
      username: "",
      password: ""
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    if (!(username === 'Zezo' && password === 'zzz')) {
      localStorage.setItem("Name", "Zezo")
      localStorage.setItem("Password", "zzz")
      this.setState({ isUser: true })
    }
  }

  render() {
    if (this.state.isUser) {
      console.log(this.state.isUser)
      return <Redirect to="/user" />;
    }
    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <div className="form" id="formContainer">
          <label htmlFor="uname" id="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required="" id="username" />
          <label htmlFor="psw" id="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required="" id="password" />
          <button type="submit" id="login" >Login</button>
        </div>
      </form>
    )
  }
}

export default Form


