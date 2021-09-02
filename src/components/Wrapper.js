import React, { Component } from 'react'
import Transition from './Transition';
import Cover from '../Cover';
import Shadow from './Shadow';
// import '../css/style1.css'
// import '../css/style2.css'
// import '../css/style3.css'
// import '../css/style4.css'
// import '../css/style5.css'


class Wrapper extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      randNum: 0,
      last: 0,
      current: 0
    }
  }




  showNext = () => {
    document.querySelector('.te-cover').classList.add('te-hide')
    document.querySelector('.te-transition').classList.add('te-show')
  }

  handleClassAdding = () => {
    document.querySelector('.te-container').addEventListener('animationend', () => {
      document.querySelector('.te-transition').classList.remove('te-show')
      document.querySelector('.te-cover').classList.remove('te-hide')
    })
  }

  importFile = () => {
    const transName = this.props.Trans[this.state.randNum]
      .slice(0, -1);

    //TODO: filter the document stylesheets to get the exact desired files based on href attr
    var stylesheets = [...document.styleSheets].slice(0, 6)
    switch (transName) {
      case 'te-flip':
        stylesheets.forEach((stylesheet) => {
          if (stylesheet.href !== stylesheets[0].href) {
            stylesheet.disabled = true
          }
          else {
            stylesheet.disabled = false
          }
        })
        break;
      case 'te-rotation':
        stylesheets.forEach((stylesheet) => {
          if (stylesheet.href !== stylesheets[1].href) {
            stylesheet.disabled = true
          }
          else {
            stylesheet.disabled = false
          }
        })
        break;
      case 'te-multiflip':
        stylesheets.forEach((stylesheet) => {
          if (stylesheet.href !== stylesheets[2].href) {
            stylesheet.disabled = true
          }
          else {
            stylesheet.disabled = false
          }
        })
        break;
      case 'te-cube':
        stylesheets.forEach((stylesheet) => {
          if (stylesheet.href !== stylesheets[3].href) {
            stylesheet.disabled = true
          }
          else {
            stylesheet.disabled = false
          }
        })
        break;
      case 'te-unfold':
        stylesheets.forEach((stylesheet) => {
          if (stylesheet.href !== stylesheets[4].href) {
            stylesheet.disabled = true
          }
          else {
            stylesheet.disabled = false
          }
        })
        break;
      case 'te-example':
        stylesheets.forEach((stylesheet) => {
          if (stylesheet.href !== stylesheets[5].href) {
            stylesheet.disabled = true
          }
          else {
            stylesheet.disabled = false
          }
        })
        break;

      default:
        break;
    }

    stylesheets.forEach(sheet => { console.log(sheet) })

  }

  // 0 -- 3 ---> flip
  // 4 -- 8 ---> rotate
  // 9 -- 11 ---> multiflip
  // 12 -- 15 ---> cube
  // 16 -- 17 ---> unfold

  componentDidMount() {

    setInterval(() => {
      var arr = [1, 4, 7, 20]
      this.setState({
        counter: (this.state.counter + 1 === arr.length) ? 0 : this.state.counter + 1,
        randNum: arr[this.state.counter]
      })
      this.importFile()
      this.showNext()
      this.handleClassAdding()
      this.updateImages()
    }, 4000)
  }

  randomNumber = (arr, arrLength) => {
    return arr[Math.floor(Math.random() * arrLength)];
  }

  updateImages = () => {
    const ImgsLength = this.props.Imgs.length
    this.state.current === ImgsLength - 1 ?
      this.setState({ current: 0, last: ImgsLength - 1 }) :
      this.setState({ last: this.state.current, current: this.state.current + 1 })
  }




  render() {

    const Trans = this.props.Trans
    const Imgs = this.props.Imgs
    const transName = Trans[this.state.randNum]
      .slice(0, -1);
    const transType = Trans[this.state.randNum]
      .slice(-1, Trans.length)

    return (
      <div className="te-wrapper">

        <Cover Imgs={Imgs} current={this.state.current} />
        <Shadow />
        <Transition transName={transName} randNum={this.state.randNum}
          transType={transType} Trans={Trans} Imgs={Imgs} last={this.state.last} current={this.state.current} />
      </div>
    )
  }
}

export default Wrapper