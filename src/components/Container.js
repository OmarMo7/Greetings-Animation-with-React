import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Snowflake from './snow'
import Text from './Text'
// import backIntervalID from '../background';


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

    var All_Imgs = ["%PUBLIC_URL%/../images/Baby.png",
      "%PUBLIC_URL%/../images/Beauty.png",
      "%PUBLIC_URL%/../images/Beauty2.jpg",
      "%PUBLIC_URL%/../images/ghost.jpg",
      "%PUBLIC_URL%/../images/Looking behind.jpg"]
    var Imgs = []
    
    All_Imgs.forEach(Img => {
      var content = {
        img: Img,
        width: 329,
        height: 425
      };
      Imgs.push(content)
    })

    this.state = {
      Trans,
      Imgs
    }
  }

  render() {
    // if (!this.props.isLoggedIn) {
    //   clearInterval(backIntervalID)
    //   console.log("cleared")
    // }
    // else {
    //   console.log("set")
    //   setInterval(backIntervalID, 4000)
    // }
    return (
      <div className="te-container">
        {/* <Snowflake isLoggedIn={this.props.isLoggedIn} /> */}
        <Wrapper Trans={this.state.Trans} Imgs={this.state.Imgs} isLoggedIn={this.props.isLoggedIn} />
        <Text isLoggedIn={this.props.isLoggedIn} />
      </div>
    )
  }

}

export default Container