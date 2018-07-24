import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  componentWillMount() {
    console.log(`persons.js component will mount`);
  }

  componentDidMount() {
    console.log("persons.js inside component did mount");
  }


  componentWillReceiveProps(props) {
    console.log(`Update persons JS -- component will receive props  `);
  }

  // shouldComponentUpdate(nProps, nState) {
  //   console.log(`UPDATE PERSONS JS -- should component update`);
  //   // return nProps.persons !== this.props.persons;    
  //   return true;
  // }

  componentWillUpdate(){
    console.log(`UPDATE PERSONS JS -- component will update`);
  }

  render () {
    console.log("persons.js inside render");
    return (this.props.persons.map((person, index) => {
      return <Person
        position = {index}
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => this.props.clicked(index)}
        changedName={(event) => this.props.changed(person.id, event)}
        // autheticated={this.props.isAuthenticated}
      />
    }))
  }
} 

export default Persons;