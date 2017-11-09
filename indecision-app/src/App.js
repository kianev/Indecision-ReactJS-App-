import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Indecision App",
      options: []
    }
}

  removeAll(e){
      this.setState({
        options: []
      })
  }
  render () {
    const onFormSumbit = (e) => {
      e.preventDefault();
     const option = e.target.elements.option.value;

     if(option){
       let optionsArray = this.state.options;
       optionsArray.push(option);

       this.setState({
         options: optionsArray
       })

       e.target.elements.option.value = "";
     }
    }

    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        {this.state.subtitle && <p>{this.state.subtitle}</p>}
        <p>{this.state.options.length > 0 ? 'Here are your options: ' : 'No options'}</p>
        <p>{this.state.options.length }</p>
        <ol>
          <li>Item One</li>
          <li>Item Two</li>
        </ol>
        <form onSubmit={onFormSumbit}>
          <input type="text" name="option"/>
          <button>Add Option</button>
          <button onClick={this.removeAll.bind(this)}>Remove All</button>
        </form>
      </div>
    )
  }
}
export default App
