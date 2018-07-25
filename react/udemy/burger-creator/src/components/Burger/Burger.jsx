import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerInredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(
    ingredientName => {
      return [...Array(props.ingredients[ingredientName])].map((_, index) => {
        return <BurgerIngredient key={ingredientName+index} type = {ingredientName}/>
      });
    }
  ).reduce((previous, current) => {
    return previous.concat(current);
  },[]);

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;