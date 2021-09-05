import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(e.target.name)
    console.log(e.target.value)
  }

  handleSubmit = (e) => {

    const { username, password } = this.state;
    const data = {
      username,
      password
    }
    const isUser = this.props.handleSuccessfulAuth(data)
    if (isUser) {
      this.props.history.push("/user")
    }


    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <div className="form" id="formContainer">
          <label htmlFor="uname" id="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" required id="username" />
          <label htmlFor="psw" id="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required id="password" />
          <button type="submit" id="login" >Login</button>
        </div>
      </form>
    )
  }
}

export default Form


