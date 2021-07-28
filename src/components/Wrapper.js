import React, { Component } from 'react'
import Transition from './Transition';
import Cover from './Cover';
import Shadow from './Shadow';
// import '../css/style1.css'
import '../css/style2.css'
import '../css/style3.css'
// import '../css/style4.css'
// import '../css/style5.css'



class Wrapper extends Component {

  state = {
    randNum: 0,
    last: 0,
    current: 0
  }


  showNext = () => {
    document.querySelector('.te-transition').classList.add('te-show')
    document.querySelector('.te-cover').classList.add('te-hide')
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        randNum: this.randomNumber(4, 11)
      })
      // console.log(document.querySelector('.te-container'))
      // console.log(document.querySelector('.te-wrapper'))
      this.showNext()
      document.querySelector('.te-container').onanimationend = () => {
        document.querySelector('.te-cover').classList.remove('te-hide')
        document.querySelector('.te-transition').classList.remove('te-show')
      }
      this.updateImages()
    }, 4000)
  }

  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
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
    const ImgsLength = Imgs.length

    const transName = Trans[this.state.randNum].slice(0, -1);


    return (
      <div className="te-wrapper">

        <Cover Imgs={Imgs} current={this.state.current} />
        <Shadow />
        <Transition lenth={ImgsLength} transName={transName} randNum={this.state.randNum}
          transType={Trans[this.state.randNum].slice(-1, Trans.length)} Trans={Trans} Imgs={Imgs} last={this.state.last} current={this.state.current} />
      </div>
    )
  }
}

export default Wrapper