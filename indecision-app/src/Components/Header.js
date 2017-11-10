import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className="header">
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    )
  }
}
export default Header
