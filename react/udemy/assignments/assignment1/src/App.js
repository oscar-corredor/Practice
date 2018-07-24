import React, { Component } from 'react';
import './App.css';
import Input from './Input/Input'
import Output from './Output/Output';

class App extends Component {
  state = {
    username: "oskar132",
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Assignment 1</h1>
        </header>
        <Input changeEvent = {this.updateUsername} username = {this.state.username}/>
        <Output username={this.state.username}/>
        <Output username={this.state.username}/>
        <Output username={this.state.username}/>
      </div>
    );
  }

  updateUsername = (event) => {
    this.setState({username: event.target.value});
  };
}

export default App;
