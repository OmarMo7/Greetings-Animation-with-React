import React, { Component } from 'react'
import Wrapper from './Wrapper'
import { Redirect } from "react-router-dom";

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
      isUser: localStorage.getItem("Name") && localStorage.getItem("Password") ? true : false
    }
  }

  render() {
    let isUser = this.state.isUser
    if (!isUser) {
      console.log(isUser)
      return <Redirect to="/" />;
    }
    localStorage.removeItem("Name")
    localStorage.removeItem("Password")
    return (
      <div className="te-container">
        <Wrapper Trans={this.state.Trans} Imgs={this.state.Imgs} />
      </div>
    )
  }

}

export default Container