import React, { Component } from 'react'
import '../src/App.scss'

class Test extends Component {
   constructor (props){
     super(props);
     this.state = {
       clicked: false
     }
     this.showDetails = this.showDetails.bind(this);
   }
   showDetails(){
      this.setState({
        clicked: !this.state.clicked
      })
   }
  render () {
    return (
      <div className="App">
        <h1>Visibility Toggle</h1>
        <button onClick={this.showDetails}>{this.state.clicked ? 'Hide Details' : 'Show details'}</button>
        {(this.state.clicked) && <p>Hey. These are some details you can see</p>}
      </div>
    )
  }
}
export default Test

