import React from 'react';
import Aux from '../../../hoc/aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(key => {
   return ( <li key={key}>
      <span style={{ textTransform: 'capitalize' }}>{key}</span>: {props.ingredients[key]}
    </li>)
  });

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burguer with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p> <strong> Total price: {props.price} </strong></p>
      <p>Continue to checkout?</p>
      <Button buttonType = "Danger" clicked = {props.purchaseCancelled}>CANCEL</Button>
      <Button buttonType = "Success" clicked = {props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  );
}

export default orderSummary;