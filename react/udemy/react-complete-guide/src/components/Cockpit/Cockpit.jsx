import React from 'react';

const Cockpit = (props) => {
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

  let classes = [];
  if (props.length <= 2) {
    classes.push("red");
  }

  if (props.length <= 1) {
    classes.push("bold");
  }

  if(props.showPersons) {
    style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
  }

  return (
    <div>
      <h1>Hi I am a react app.</h1>
          <p className={classes.join(" ")}>This is working</p>
          <button
            style={style}
            onClick={props.clicked} >Switch name</button>

          <button onClick = {props.login}>Log In</button>
    </div>
  )

}

export default Cockpit;