import React, { Component } from 'react'
import Wrapper from './Wrapper'


class Container extends Component {

  render() {
    return (
      <div className="te-container">
        <Wrapper Trans={this.props.Trans} Imgs={this.props.Imgs} />
      </div>
    )
  }
}

export default Container