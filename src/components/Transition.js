import React, { Component } from 'react'


class Transition extends Component {

  constructor(props) {
    super(props);
    this.state = {
      randNum: 0,
      transName: "te-flip",
      transType: "2",
      last: this.props.last,
      current: this.props.current
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      randNum: props.randNum,
      transName: props.transName,
      transType: props.transType,
      current: props.current,
      last: props.last
    }
  }

  render() {
    switch (this.state.transName) {
      case 'te-flip':
        return (
          <div className={"te-transition te-flip" + this.state.transType}>
            <div className="te-card">
              <div className="te-front">
                <img style={{ width: this.props.Imgs[this.state.last].width, height: this.props.Imgs[this.state.last].height }} alt="" src={this.props.Imgs[this.state.last].path}></img>
              </div>
              <div className="te-back">
                <img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}>
                </img>
              </div>
            </div>
          </div>
        )
      case 'te-rotation':
        return (
          <div className={"te-transition te-rotation" + this.state.transType}>
            <div className="te-front">
              <img style={{ width: this.props.Imgs[this.state.last].width, height: this.props.Imgs[this.state.last].height }} alt="" src={this.props.Imgs[this.state.last].path}></img>
            </div>
            <div className="te-back">
              <img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
            </div>
          </div>
        )
      case 'te-multiflip':
        return (
          <div className={"te-transition te-multiflip" + this.state.transType}>
            <div className="te-card te-flip1">
              <div className="te-front">
                <img style={{ width: this.props.Imgs[this.state.last].width, height: this.props.Imgs[this.state.last].height }} alt="" src={this.props.Imgs[this.state.last].path}></img>
              </div>
              <div className="te-back">
                <img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
              </div>
            </div>
            <div className="te-card te-flip2">
              <div className="te-front">
                <img style={{ width: this.props.Imgs[this.state.last].width, height: this.props.Imgs[this.state.last].height }} alt="" src={this.props.Imgs[this.state.last].path}></img>
              </div>
              <div className="te-back">
                <img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
              </div>
            </div>
            <div className="te-card te-flip3">
              <div className="te-front">
                <img style={{ width: this.props.Imgs[this.state.last].width, height: this.props.Imgs[this.state.last].height }} alt="" src={this.props.Imgs[this.state.last].path}></img>
              </div>
              <div className="te-back">
                <img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
              </div>
            </div>
            <div className="te-card te-flip4">
              <div className="te-front">
                <img style={{ width: this.props.Imgs[this.state.last].width, height: this.props.Imgs[this.state.last].height }} alt="" src={this.props.Imgs[this.state.last].path}></img>
              </div>
              <div className="te-back">
                <img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
              </div>
            </div>
            <div className="te-card te-flip5">
              <div className="te-front">
                <img style={{ width: this.props.Imgs[this.state.last].width, height: this.props.Imgs[this.state.last].height }} alt="" src={this.props.Imgs[this.state.last].path}></img>
              </div>
              <div className="te-back">
                <img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
              </div>
            </div>
            <div className="te-card te-flip6">
              <div className="te-front">
                <img style={{ width: this.props.Imgs[this.state.last].width, height: this.props.Imgs[this.state.last].height }} alt="" src={this.props.Imgs[this.state.last].path}></img>
              </div>
              <div className="te-back">
                <img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
              </div>
            </div>
            <div className="te-card te-flip7">
              <div className="te-front">
                <img style={{ width: this.props.Imgs[this.state.last].width, height: this.props.Imgs[this.state.last].height }} alt="" src={this.props.Imgs[this.state.last].path}></img>
              </div>
              <div className="te-back">
                <img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
              </div>
            </div>
          </div>
        )
      case 'te-cube':
        return (
          <div className={"te-transition te-cube" + this.state.transType}>
            <div className="te-cube-front te-cube-face te-front"><img style={{ width: this.props.Imgs[this.state.last].width, height: this.props.Imgs[this.state.last].height }} alt="" src={this.props.Imgs[this.state.last].path}></img></div>
            <div className="te-cube-top te-cube-face te-back"><img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
            </div>
            <div className="te-cube-bottom te-cube-face te-back"><img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
            </div>
            <div className="te-cube-right te-cube-face te-back"><img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
            </div>
            <div className="te-cube-left te-cube-face te-back"><img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
            </div>
          </div>
        )
      case 'te-unfold':
        return (
          <div className={"te-transition te-unfold" + this.state.transType}>
            <div className="te-front te-front1"><img style={{ width: this.props.Imgs[this.state.last].width, height: this.props.Imgs[this.state.last].height }} alt="" src={this.props.Imgs[this.state.last].path}></img>
            </div>
            <div className="te-front te-front2">
              <img style={{ width: this.props.Imgs[this.state.last].width, height: this.props.Imgs[this.state.last].height }} alt="" src={this.props.Imgs[this.state.last].path}></img>
            </div>
            <div className="te-front te-front3">
              <img style={{ width: this.props.Imgs[this.state.last].width, height: this.props.Imgs[this.state.last].height }} alt="" src={this.props.Imgs[this.state.last].path}></img>
            </div>
            <div className="te-back te-back1">
              <img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
            </div>
            <div className="te-back te-back2">
              <img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
            </div>
            <div className="te-back te-back3">
              <img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
            </div>
          </div>
        )

      case "te-example":
        return (
          <div className={"te-transition te-example" + this.state.transType}>
            <div className="te-front">
              <img style={{ width: this.props.Imgs[this.state.last].width, height: this.props.Imgs[this.state.last].height }} alt="" src={this.props.Imgs[this.state.last].path}></img>
            </div>
            <div className="te-back">
              <img style={{ width: this.props.Imgs[this.state.current].width, height: this.props.Imgs[this.state.current].height }} alt="" src={this.props.Imgs[this.state.current].path}></img>
            </div>
          </div>
        )
      default:
        return null
    }
  }
}

export default Transition