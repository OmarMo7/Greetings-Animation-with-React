import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Snowflake from './snow'
import Text from './Text'
// import backIntervalID from '../background';

var All_Imgs = {
  sun: {
    img: null, path: '%PUBLIC_URL%/../images/Mostafa Sun.jpg', status: 'none', width: 329,
    height: 425
  },
  nady: {
    img: null, path: '%PUBLIC_URL%/../images/Mostafa Nady.jpg', status: 'none', width: 329,
    height: 425
  },
  group: {
    img: null, path: '%PUBLIC_URL%/../images/Mostafa Group.jpg', status: 'none', width: 329,
    height: 425
  },
  oksor: {
    img: null, path: '%PUBLIC_URL%/../images/Eloksor Mostafa.jpg', status: 'none', width: 329,
    height: 425
  },
  mssassa: {
    img: null, path: '%PUBLIC_URL%/../images/El mssassa.jpg', status: 'none', width: 329,
    height: 425
  },
  like: {
    img: null, path: '%PUBLIC_URL%/../images/Like.jpg', status: 'none', width: 329,
    height: 425
  },
  helton: {
    img: null, path: '%PUBLIC_URL%/../images/Infront Helton.jpg', status: 'none', width: 329,
    height: 425
  },
}
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

    var Imgs = []

    Imgs = [All_Imgs.sun,
    All_Imgs.nady,
    All_Imgs.group,
    All_Imgs.oksor,
    All_Imgs.mssassa,
    All_Imgs.like,
    All_Imgs.helton]

    this.state = {
      Trans,
      Imgs
    }
  }

  loadImage = (ref) => {
    return new Promise(function (resolve) {

      ref.img = new Image();
      ref.img.src = ref.path;
      ref.img.onload = () => { ref.status = 'OK'; resolve() };
      ref.img.onerror = () => { ref.status = 'bad'; resolve() };

    });
  }

  resolveLoading = () => {
    for (let img in All_Imgs) {
      if (All_Imgs.hasOwnProperty(img)) continue;
      Promise
        .all([this.loadImage(img)])
        .then(() => {
          console.log('sun:', img.status);
          console.log('nady:', img.status);
          console.log('group:', img.status);
          console.log('oksor:', img.status);
          console.log('mssassa:', img.status);
          console.log('like:', img.status);
          console.log('helton:', img.status);
        })
    }
    // Promise
    //   .all([this.loadImage(All_Imgs.sun),
    //   this.loadImage(All_Imgs.nady),
    //   this.loadImage(All_Imgs.group),
    //   this.loadImage(All_Imgs.oksor),
    //   this.loadImage(All_Imgs.mssassa),
    //   this.loadImage(All_Imgs.like),
    //   this.loadImage(All_Imgs.helton)])
    //   .then(() => {
    //     console.log('sun:', All_Imgs.sun.status);
    //     console.log('nady:', All_Imgs.nady.status);
    //     console.log('group:', All_Imgs.group.status);
    //     console.log('oksor:', All_Imgs.oksor.status);
    //     console.log('mssassa:', All_Imgs.mssassa.status);
    //     console.log('like:', All_Imgs.like.status);
    //     console.log('helton:', All_Imgs.helton.status);
    //   })
  }


  render() {
    this.resolveLoading()
    return (
      <div className="te-container">
        <Snowflake isLoggedIn={this.props.isLoggedIn} />
        <Wrapper Trans={this.state.Trans} Imgs={this.state.Imgs} isLoggedIn={this.props.isLoggedIn} />
        <Text isLoggedIn={this.props.isLoggedIn} />
      </div>
    )
  }

}

export default Container