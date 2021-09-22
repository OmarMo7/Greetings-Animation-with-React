import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Snowflake from './snow'
import Text from './Text'
import Background from '../background'
// import backIntervalID from '../background';

var Mostafa = {
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
  }
}

var Amr = {
  doctor: {
    img: null, path: '%PUBLIC_URL%/../images/Doctor amr.jpg', status: 'none', width: 329,
    height: 425
  },
  me: {
    img: null, path: '%PUBLIC_URL%/../images/Me Amr.jpg', status: 'none', width: 329,
    height: 425
  },
  guyz: {
    img: null, path: '%PUBLIC_URL%/../images/Guyz.jpg', status: 'none', width: 329,
    height: 425
  },
  h5h: {
    img: null, path: '%PUBLIC_URL%/../images/h5h.jpg', status: 'none', width: 329,
    height: 425
  },
  run: {
    img: null, path: '%PUBLIC_URL%/../images/Amr runner.jpg', status: 'none', width: 329,
    height: 425
  },
  alone: {
    img: null, path: '%PUBLIC_URL%/../images/Amr alone.jpg', status: 'none', width: 329,
    height: 425
  }
}

var messages = {
  Mostafa: ["🐱‍💻🤑💸 أيام جولد يابن عمى الهكر"
    , '😊 ماحلى اللمة والصحبة الحلوة'
    , '😔 اللى بيروح الأقصر وميقوليش.. زعلان منك '
    , '🍭😂 المصاصة لا تزال فى جيبى يا دررش'
    , '🎉 ربنا يكرمك بالنجاح كل يوم والتانى'
    , ' 🤩💞 وكل سنة وانت طيب يا ابو العظمة'
    , '😂😉 صاحب ال19 🤩.. أراهن أنك فاكر دى']
  ,
  Amr: ["🍭😂 الدكتور عموور.. البالطو يليق بك يا كبيير"
    , '😔🤦‍♂️😉 مش عارف ليه مش لاقى صورة غيرها معاك '
    , '😁😁 تلات سنين ودى الصورة الوحيدة لينا احنا الاربعة '
    , '🍭🤪😂 مستحيل تكون فاكر المسخرة دى'
    , '🎉🤗🏃‍♂️ طلعنا زملا يا برنس وكنا بنجرى سوا'
    , '🤩💞 واحشنى كتير يعموور..😊 وكل سنة وانت علطول طيب']
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


    if (this.props.username === "Amr" || this.props.username === "amr") {
      Imgs = [Amr.alone,
      Amr.doctor,
      Amr.me,
      Amr.guyz,
      Amr.h5h,
      Amr.run]
    }
    else if (this.props.username === "Darsh" || this.props.username === "darsh") {
      Imgs = [Mostafa.sun,
      Mostafa.nady,
      Mostafa.group,
      Mostafa.oksor,
      Mostafa.mssassa,
      Mostafa.like,
      Mostafa.helton]
    }
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

  resolveLoading = (Imgs) => {
    for (let img in Imgs) {
      if (Imgs.hasOwnProperty(img)) continue;
      Promise
        .all([this.loadImage(img)])
    }
  }


  render() {
    this.resolveLoading(this.state.Imgs)
    return (
      <div className="te-container">
        <Background isLoggedIn={this.props.isLoggedIn} />
        <Snowflake isLoggedIn={this.props.isLoggedIn} />
        <Wrapper Trans={this.state.Trans} Imgs={this.state.Imgs} isLoggedIn={this.props.isLoggedIn} />
        <Text isLoggedIn={this.props.isLoggedIn} username={this.props.username} messages={messages} />
      </div>
    )
  }

}

export default Container