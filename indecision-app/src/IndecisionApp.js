import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header';
import Action from './Components/Action';
import Options from './Components/Options';
import AddOption from './Components/AddOption';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      title: "Indecision",
      subTitle: "Put your life in the hands of computer.",
      options: []
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick(){
    let randomNum = Math.floor(Math.random() * this.state.options.length);
    let option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option){
    if(!option){
      return 'Enter valid value to add item!'
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists.'
    }

   this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
   });
  }

  render () {
    return (
      <div className="App">
        <Header title={this.state.title} subTitle={this.state.subTitle}/>
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}
export default App
