import React, { Component } from 'react'
// import { Redirect } from "react-router-dom";
import axios from 'axios'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // isUser: false,
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

    axios.post("http://localhost:3000", {
      user: {
        username: username,
        password: password
      }
    },
      { withCredentials: true }
    ).then(res => {
      console.log("This is the response", res)
      this.props.handleSubmit(res.data)
      this.props.history.push("/user")
    }).catch(err => {
      console.log("This is the error", err)
    })
    e.preventDefault();
    // if (!(username === 'Zezo' && password === 'zzz')) {
    //   localStorage.setItem("Name", "Zezo")
    //   localStorage.setItem("Password", "zzz")
    //   this.setState({ isUser: true })
    // }
  }

  render() {
    // if (this.state.isUser) {
    //   console.log(this.state.isUser)
    //   return <Redirect to="/user" />;
    // }
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


