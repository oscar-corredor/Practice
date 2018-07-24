import React, { PureComponent } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Radium, { StyleRoot } from 'radium';

export const AuthContext = React.createContext(false);


class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log(`APP.js constructor ${props}`);
    this.state = {
      persons: [
        { name: "oscar", age: "abcd", id: 1 },
        { name: "david", age: 28, id: 2 },
        { name: "Oguz", age: 23, id: 3 }
      ],
      showPersons: false,
      toggleClickCounter: 0,
      authenticated: false,
    }
  }

  // shouldComponentUpdate(nProps, nState) {
  //   console.log(`UPDATE APP JS -- should component update`);
  //   return true;
  // }

  componentWillMount() {
    console.log(`app.js component will mount`);
  }

  componentDidMount() {
    console.log("app.js inside component did mount");
  }



  render() {
    console.log(`app.js in render`);
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        // isAuthenticated={this.state.isAuthenticated} 
        />
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <StyleRoot>
        <div className="App">
          <button onClick={() => this.setState({ showPersons: true })}>Show persons</button>
          <Cockpit
            clicked={this.togglePersonsHandler}
            length={this.state.persons.length}
            showPersons={this.state.showPersons}
            login={this.loginHandler} />
          <AuthContext.Provider value={this.state.isAuthenticated}>
            {persons}
          </AuthContext.Provider>

          {/* <Person name = "nub" age='20'>My hobbies are: Skydiving</Person> */}
        </div>
      </StyleRoot>
    );

    // JSX without syntactic sugar
    // return React.createElement('div', {className:"App"}, React.createElement('h1',null, 'Hi I am a React app!!!'));
  }

  loginHandler = () => {
    this.setState({ isAuthenticated: true });
  }

  togglePersonsHandler = () => {
    this.setState((prevState, props) => {
      return {
        showPersons: !this.state.showPersons,
        toggleClickCounter: prevState.toggleClickCounter + 1
      }
    });
  }

  nameChangedHandler = (id, event) => {
    const updatedPersonIndex = this.state.persons.findIndex(person => person.id === id);
    const updatedPerson = { ...this.state.persons[updatedPersonIndex] };

    updatedPerson.name = event.target.value;

    const nPersons = [...this.state.persons];

    nPersons[updatedPersonIndex] = updatedPerson;

    this.setState({
      persons: nPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    const personsCopy = [...this.state.persons]
    personsCopy.splice(personIndex, 1);
    this.setState({ persons: personsCopy });
  }
}



export default Radium(App);
