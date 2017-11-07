import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    let user = {
      name: "Ivan",
      age: 18,
      location: "Plovdiv"
    };
    
    function getLocation (location) {
      if(location){
        return <p>Location: {user.location}</p>;
      }
    }
    return (
      <div className="App">
       <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
      </div>
    );
  }
}

export default App;
