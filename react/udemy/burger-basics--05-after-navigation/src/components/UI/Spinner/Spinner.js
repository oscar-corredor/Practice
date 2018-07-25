import React from 'react';
import classes from './Spinner.css';

const spinner = (props) => {
  return (
    <div className={classes.Loader}>Ordering...</div>
  );
}
 
export default spinner;