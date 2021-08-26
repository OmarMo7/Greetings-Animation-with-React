import React, { Component } from 'react'
// import Container from './Container';
import { Redirect } from "react-router-dom";


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: null,
      username: "",
      password: ""
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var userInput = document.getElementById('username')
    var passInput = document.getElementById('password')
    console.log(userInput.value)
    console.log(passInput.value)
    this.setState({
      username: userInput.value,
      password: passInput.value
    })
    this.setState({ redirect: "/user" });
  }

  render() {
    if (this.state.username === "Zezo" && this.state.password === "zzz") {
      return <Redirect to={this.state.redirect} />
    }
    else {
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
}

export default Form

