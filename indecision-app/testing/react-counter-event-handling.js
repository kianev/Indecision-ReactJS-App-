import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.count
    }
  }

  addOne(e){
    this.setState({
      count: this.state.count + 1
    })
  }

  minusOne(e){
    this.setState({
      count: this.state.count - 1
    })
  }

  reset(e){
    this.setState({
      count: 0
    })
  }

  //experimental syntax to bind this
  /*handleClick = () => {
   console.log('this is:', this);
   }*/

  render () {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.addOne.bind(this)}>+1</button>
        <button onClick={this.minusOne.bind(this)}>-1</button>
        <button onClick={this.reset.bind(this)}>Reset</button>
        /* <button onClick={this.handleClick}>
         Click me
         </button>*/
      </div>
    )
  }
}

App.defaultProps = {
  count: 0
}
export default App
