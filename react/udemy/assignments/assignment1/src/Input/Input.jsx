import React from 'react';

const Input = (props) => {
  return (
    <input type="text" onChange={props.changeEvent} value={props.username}/>
  );
}

export default Input;