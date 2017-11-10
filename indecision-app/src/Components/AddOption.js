import React, { Component } from 'react'

class AddOption extends Component {
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){
      alert(option);
      e.target.elements.option.value = "";
    }
  }

  render () {
    return (
      <div className="addOption">
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}
export default AddOption
