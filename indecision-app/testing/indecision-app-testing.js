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

  onRemoveAll(e){
    this.setState({
      options: []
    })
  }

  onMakeDecision(){
    let randomNum = Math.floor(Math.random() * this.state.options.length);
    let option = this.state.options[randomNum];
    alert(option);
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
        <button
          disabled={this.state.options.length === 0}
          onClick={this.onMakeDecision.bind(this)}>What should I do?</button>
        <button onClick={this.onRemoveAll.bind(this)}>Remove All</button>

        <ol>
          {this.state.options.map((option) => <li key={option}>{option}</li>)}
        </ol>
        <form onSubmit={onFormSumbit}>
          <input type="text" name="option"/>
          <button>Add Option</button>

        </form>
      </div>
    )
  }
}

//statless functional component
const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}
export default App

