import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header';
import Action from './Components/Action';
import Options from './Components/Options';
import AddOption from './Components/AddOption';
import OptionModal from './Components/OptionModal';

class App extends Component {
  state = {
    subTitle: "Put your life in the hands of computer.",
    options: [],
    selectedOption: undefined
  }

  handleCloseModal = () => {
    this.setState({ selectedOption: undefined });
  }

  handleDeleteOptions = () => {
    this.setState({ options: [] });
  }

  handleDeleteOption = (optionToDelete) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToDelete !== option)
    }))
  }

  handlePick = () => {
    let randomNum = Math.floor(Math.random() * this.state.options.length);
    let option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }))
  }

  handleAddOption = (option) => {
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
        <OptionModal selectedOption={this.state.selectedOption} handleCloseModal={this.handleCloseModal}/>
      </div>
    )
  }
}

App.defaultProps = {
  options: []
}

export default App
