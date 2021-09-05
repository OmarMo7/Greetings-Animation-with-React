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


  componentDidMount() {

  }


  handleSubmit = (e) => {

    const { username, password } = this.state;


    // axios.post("http://localhost:3000", {
    //   user: {
    //     username: username,
    //     password: password
    //   }
    // },
    //   { withCredentials: true }
    // ).then(res => {
    //   console.log("This is the response", res)
    // }).catch(err => {
    //   console.log("This is the error", err)
    // })
    const data = {
      username,
      password
    }
    axios.get("http://localhost:3000")
      .then(res => {
        if (data.username === "Zezo" && data.password === "zzz") {
          this.props.handleSuccessfulAuth(data)
          this.props.history.push("/user")
        }
        console.log(res)
      })


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


