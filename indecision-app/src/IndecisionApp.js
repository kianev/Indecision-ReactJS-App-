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
      subTitle: "Put your life in the hands of computer.",
      options: props.options
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount(){
    try{
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if(options){
        this.setState(() => ({ options }))
      }
    }catch (e){

    }
  };

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }

  }

  componentWillUnmount(){
    console.log("ComponentWillUnmount")
  }

  handleDeleteOptions(){
    this.setState({ options: [] });
  }

  handleDeleteOption(optionToDelete){
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToDelete !== option)
    }))
  }

  handlePick(){
    let randomNum = Math.floor(Math.random() * this.state.options.length);
    let option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item!'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists.'
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    })
    )
  }

  render () {
    return (
      <div className="App">
        <Header subTitle={this.state.subTitle}/>
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}

App.defaultProps = {
  options: []
}

export default App
