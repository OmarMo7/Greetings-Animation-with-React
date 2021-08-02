import React, { Component } from 'react'


class Cover extends Component {
  render() {
    return (
      <div className="te-cover">
        <img alt="" src={this.props.Imgs[this.props.current]} />
      </div>
    )
  }
}

export default Cover