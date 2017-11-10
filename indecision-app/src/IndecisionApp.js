import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header';
import Action from './Components/Action';
import Options from './Components/Options';
import AddOption from './Components/AddOption';

class App extends Component {
  render () {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of computer.";
    const options = ["Item one", "Item two", "Item three"];
    return (
      <div className="App">
        <Header title={title} subTitle={subTitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}
export default App
