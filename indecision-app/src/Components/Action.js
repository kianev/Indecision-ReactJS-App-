import React, { Component } from 'react'

class Action extends Component {
  handlePick(){
  alert("clicked")
  }

  render () {
    return (
      <div className="action">
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}
export default Action

