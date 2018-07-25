import React, { Component } from 'react';
import './Person.css';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App';


class Person extends Component {
  componentWillMount() {
    console.log(`person!!!.js component will mount`);
  }

  componentDidMount() {
    console.log("person!!!.js inside component did mount");
    if (this.props.position === 0) this.inputElement.focus();
  }

  componentWillUnmount() {
    console.log("Person component about to be removed");
  }
  render() {
    console.log(`person!!!.js rendering`);
    const style = {
      '@media(min-width: 500px)': {
        width: '450px',

      }
    }

    return (
      <div className="Person" style={style}>
        <AuthContext.Consumer>
          {authState => authState ? <p> I am authenticated!</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          onChange={this.props.changedName}
          value={this.props.name} />
      </div>)
  }
}

Person.propTyes = {
  click: PropTyes.func,
  name: PropTyes.string,
  age: PropTyes.number,
  changedName: PropTyes.func
}

export default Radium(Person);