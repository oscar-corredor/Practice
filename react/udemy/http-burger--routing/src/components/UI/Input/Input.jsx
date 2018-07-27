import React from 'react';

import classes from './Input.css'

const Input = (props) => {
  let inputElement = null;
  let errorMessage = null;
  const inputClasses = [classes.InputElement];

  if(props.invalid && props.shouldValidate && props.touched) {
    console.log(`should validate`);
    inputClasses.push(classes.Invalid);
    errorMessage = props.shouldValidate.errorMessage;
  }

  switch (props.elementType) {
    case 'input':
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value} 
        onChange={props.onChangeHandler}/>;
      break;
    case 'textArea':
      inputElement = <textArea
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value} 
        onChange={props.onChangeHandler}/>;
      break;
    case 'select':
      inputElement = (<select
        className={inputClasses.join(' ')}
        value={props.value} 
        onChange={props.onChangeHandler}>
          {props.elementConfig.options.map(option => {
            return <option key={option.value} value={option.value}>{option.displayValue}</option>
          })}
      </select>);
      break;

    default:
      inputElement = <input
        className={inputClasses.join(' ')}
        {...props.elementConfig}
        value={props.value} 
        onChange={props.onChangeHandler}/>;
      break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label} >{props.label}</label>
      {inputElement}
      {errorMessage}
    </div>
  );
}

export default Input;