import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    inputText: ""
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Assignment 2</h1>
        </header>
        <input type="text" value={this.state.inputText} onChange={this.onInputTextChange} />
        <p>{this.state.inputText}</p>
        <Validation textLength = {this.state.inputText.length} />
        {this.state.inputText.split("").map((char, index) => {
          return <CharComponent char = {char} onClick = {(event => this.charClickHandler(event, index))} key = {index} />
        })}
      </div>
    );
  }

  charClickHandler = (event, id) => {
    // turn string into array
    const stringArray = this.state.inputText.split("");
    
    // delete the element
    stringArray.splice(id,1);
    // update state
    this.setState({inputText: stringArray.join("")});
  }

  onInputTextChange = (event) => {
    this.setState({inputText: event.target.value});
  }
}

export default App;
