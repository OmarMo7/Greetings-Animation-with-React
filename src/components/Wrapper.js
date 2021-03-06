import React, { Component } from 'react'
import Transition from './Transition';
import Cover from '../Cover';
import Shadow from './Shadow';
import { Redirect } from 'react-router';
var interval_ID

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
  }

  /**
   * Animations Indexes
   0 -- 3 ---> flip
   4 -- 8 ---> rotate
   9 -- 11 ---> multiflip
   12 -- 15 ---> cube
   16 -- 17 ---> unfold
   */

  componentDidMount() {
    interval_ID = setInterval(() => {
      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
        , 17, 18, 19, 20, 21, 22, 23]
      this.setState({
        counter: (this.state.counter + 1 === arr.length) ? 0 :
          this.state.counter + 1,
        randNum: arr[this.state.counter]
      })
      this.importFile()
      this.showNext()
      this.handleClassAdding()
      this.updateImages()
    }, 6000)
  }

  randomNumber = (arr, arrLength) => {
    return arr[Math.floor(Math.random() * arrLength)];
  }

  updateImages = () => {
    const ImgsLength = this.props.Imgs.length
    this.state.current === ImgsLength - 1 ?
      this.setState({ current: 0, last: ImgsLength - 1 }) :
      this.setState({
        last: this.state.current,
        current: this.state.current + 1
      })
  }

  componentWillUnmount() {
    console.log("no");
    clearInterval(interval_ID);
  }

  render() {
    let isUser = this.props.isLoggedIn
    if (!isUser) {
      console.log(isUser)
      return <Redirect to="/" />;
    }

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