import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      { name: "oscar", age: 29 },
      { name: "david", age: 28 },
      { name: "Oguz", age: 23 }
    ]
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };
    return (
      <div className="App">
        <h1>Hi I am a react app.</h1>
        <button 
        style = {style}
        onClick={this.switchNameHandler.bind(this,"Michael Karim")} >Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changedName = {this.nameChangedHandler} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.switchNameHandler("DAVID!!!!")}>My hobbies are: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}>My hobbies are: Running</Person>
        {/* <Person name = "nub" age='20'>My hobbies are: Skydiving</Person> */}
      </div>
    );

    // JSX without syntactic sugar
    // return React.createElement('div', {className:"App"}, React.createElement('h1',null, 'Hi I am a React app!!!'));
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 29 },
        { name: "Michael", age: 28 },
        { name: "Oguz", age: 23 }
      ]
    })
  }

  switchNameHandler = (newName) => {
    // console.log("clicked!");
    // DONT DO THIS this.state.persons[0].name = "Oscar David Corredor Ortega"

    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })

  }
}

export default App;
