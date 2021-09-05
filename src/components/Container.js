import React, { Component } from 'react'
import Wrapper from './Wrapper'
// import { Redirect } from "react-router-dom";

class Container extends Component {
  constructor(props) {
    super(props);
    var Trans = [
      "te-flip1",
      "te-flip2",
      "te-flip3",
      "te-flip4",
      "te-rotation1",
      "te-rotation2",
      "te-rotation3",
      "te-rotation4",
      "te-rotation5",
      "te-multiflip1",
      "te-multiflip2",
      "te-multiflip3",
      "te-cube1",
      "te-cube2",
      "te-cube3",
      "te-cube4",
      "te-unfold1",
      "te-unfold2",
      "te-example1",
      "te-example2",
      "te-example3",
      "te-example4",
      "te-example5",
      "te-example6",
      "te-example7"
    ]
    var All_Imgs = document.querySelectorAll('.img-transition')
    var Imgs = []
    All_Imgs.forEach(Img => {
      var content = {
        img: Img.src,
        width: 329,
        height: 425
      };
      Imgs.push(content)
    })

    this.state = {
      Trans,
      Imgs,
      isLoggedIn: this.props.isLoggedIn
    }
  }

  // static getDerivedStateFromProps(props, states) {
  //   console.log("props", props)
  //   console.log("states", states)
  //   return {
  //     isLoggedIn: props.isLoggedIn,
  //   };
  // }

  // handleSuccessfulAuth = (data) => {
  //   this.props.handleSubmit(data)
  //   this.props.history.push("/user")
  // }

  // shouldComponentUpdate() {
  //   let isUser = this.state.isLoggedIn
  //   if (!isUser) {
  //     console.log("worked")
  //     return false
  //   }
  //   return true
  // }

  render() {

    return (
      <div className="te-container">
        <Wrapper Trans={this.state.Trans} Imgs={this.state.Imgs} isLoggedIn={this.state.isLoggedIn} />
      </div>
    )
  }

}

export default Container