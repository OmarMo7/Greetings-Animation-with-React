import React, { Component } from 'react'


class Transition extends Component {
  constructor(props) {
    super(props)
    this.state.Trans = this.props.Trans
    this.state.Imgs = this.props.Imgs
  }

  state = {
    randNum: 0,
    transName: "",
    transType: "",
    last: 0,
    current: 0,
    Imgs: [],
    Trans: []
  }

  componentDidMount() {
    setInterval(() => {
      let num = 0
      num = this.props.random(0, 17)
      this.setState({
        randNum: num,
        transName: this.props.Trans[num].slice(0, -1), transType:
          this.props.Trans[num].slice(-1, this.props.Trans.length),
      })
      this.updateImages()
    }, 4000)
  }

  updateImages = () => {
    this.state.current === this.state.Imgs.length - 1 ?
      this.setState({ current: 0, last: this.state.Imgs.length - 1 }) :
      this.setState({ last: this.state.current, current: this.state.current + 1 })
  }

  render() {
    switch (this.state.transName) {
      case 'te-flip':
        return (
          <div className={"te-transition te-flip " + this.state.transType}>
            <div className="te-card">
              <div className="te-front">
                <img alt="" src={this.props.Imgs[this.state.last]}></img>
              </div>
              <div className="te-back">
                <img alt="" src={this.props.Imgs[this.state.current]}>
                </img>
              </div>
            </div>
          </div>
        )
      case 'te-rotation':
        return (
          <div className={"te-transition te-rotation " + this.state.transType}>
            <div className="te-front">
              <img alt="" src={this.props.Imgs[this.state.last]}></img>
            </div>
            <div className="te-back">
              <img alt="" src={this.props.Imgs[this.state.current]}></img>
            </div>
          </div>
        )
      case 'te-multiflip':
        return (
          <div className={"te-transition te-multiflip " + this.state.transType}>
            <div className="te-card te-flip1">
              <div className="te-front">
                <img alt="" src={this.props.Imgs[this.state.last]}></img>
              </div>
              <div className="te-back">
                <img alt="" src={this.props.Imgs[this.state.current]}></img>
              </div>
            </div>
            <div className="te-card te-flip2">
              <div className="te-front">
                <img alt="" src={this.props.Imgs[this.state.last]}></img>
              </div>
              <div className="te-back">
                <img alt="" src={this.props.Imgs[this.state.current]}></img>
              </div>
            </div>
            <div className="te-card te-flip3">
              <div className="te-front">
                <img alt="" src={this.props.Imgs[this.state.last]}></img>
              </div>
              <div className="te-back">
                <img alt="" src={this.props.Imgs[this.state.current]}></img>
              </div>
            </div>
            <div className="te-card te-flip4">
              <div className="te-front">
                <img alt="" src={this.props.Imgs[this.state.last]}></img>
              </div>
              <div className="te-back">
                <img alt="" src={this.props.Imgs[this.state.current]}></img>
              </div>
            </div>
            <div className="te-card te-flip5">
              <div className="te-front">
                <img alt="" src={this.props.Imgs[this.state.last]}></img>
              </div>
              <div className="te-back">
                <img alt="" src={this.props.Imgs[this.state.current]}></img>
              </div>
            </div>
            <div className="te-card te-flip6">
              <div className="te-front">
                <img alt="" src={this.props.Imgs[this.state.last]}></img>
              </div>
              <div className="te-back">
                <img alt="" src={this.props.Imgs[this.state.current]}></img>
              </div>
            </div>
            <div className="te-card te-flip7">
              <div className="te-front">
                <img alt="" src={this.props.Imgs[this.state.last]}></img>
              </div>
              <div className="te-back">
                <img alt="" src={this.props.Imgs[this.state.current]}></img>
              </div>
            </div>
          </div>
        )
      case 'te-cube':
        return (
          <div className={"te-transition te-cube " + this.state.transType}>
            <div className="te-cube-front te-cube-face te-front"><img alt="" src={this.props.Imgs[this.state.last]}></img></div>
            <div className="te-cube-top te-cube-face te-back"><img alt="" src={this.props.Imgs[this.state.current]}></img>
            </div>
            <div className="te-cube-bottom te-cube-face te-back"><img alt="" src={this.props.Imgs[this.state.current]}></img>
            </div>
            <div className="te-cube-right te-cube-face te-back"><img alt="" src={this.props.Imgs[this.state.current]}></img>
            </div>
            <div className="te-cube-left te-cube-face te-back"><img alt="" src={this.props.Imgs[this.state.current]}></img>
            </div>
          </div>
        )
      case 'te-unfold':
        return (
          <div className={"te-transition te-unfold " + this.state.transType}>
            <div className="te-front te-front1"><img alt="" src={this.props.Imgs[this.state.last]}></img>
            </div>
            <div className="te-front te-front2">
              <img alt="" src={this.props.Imgs[this.state.last]}></img>
            </div>
            <div className="te-front te-front3">
              <img alt="" src={this.props.Imgs[this.state.last]}></img>
            </div>
            <div className="te-back te-back1">
              <img alt="" src={this.props.Imgs[this.state.current]}></img>
            </div>
            <div className="te-back te-back2">
              <img alt="" src={this.props.Imgs[this.state.current]}></img>
            </div>
            <div className="te-back te-back3">
              <img alt="" src={this.props.Imgs[this.state.current]}></img>
            </div>
          </div>
        )
      default:
        return null
    }
  }
}

export default Transition