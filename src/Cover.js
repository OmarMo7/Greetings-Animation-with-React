import React, { Component } from 'react'


class Cover extends Component {
  render() {
    return (
      <div className="te-cover" >
        <img style={{ width: this.props.Imgs[this.props.current].width, height: this.props.Imgs[this.props.current].height }} alt="" src={this.props.Imgs[this.props.current].path} />
      </div>
    )
  }
}

export default Cover