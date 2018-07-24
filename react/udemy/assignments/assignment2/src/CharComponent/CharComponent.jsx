import React from 'react';

let CharComponent = (props) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid"
  };
  return <p style = {style} onClick = {props.onClick}>{props.char}</p>
};

export default CharComponent;