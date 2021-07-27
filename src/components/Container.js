import React, { Component } from 'react'
import Transition from '../components/Transition';
import Cover from '../components/Cover';


class Container extends Component {

  state = {
    randNum: 0,
    last: 0,
    current: 0
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        randNum: this.randomNumber(0, 17)
      })
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

    return (
      <div className="te-container">
        <Cover Imgs={Imgs} current={this.state.current} />
        <Transition lenth={ImgsLength} transName={Trans[this.state.randNum].slice(0, -1)} randNum={this.state.randNum}
          transType={Trans[this.state.randNum].slice(-1, Trans.length)} Trans={Trans} Imgs={Imgs} last={this.state.last} current={this.state.current} />
      </div>
    )
  }
}

export default Container