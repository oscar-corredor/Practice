import * as actionTypes from './actionsTypes';
import axios from '../../axios-orders';

//action creators
//name them in camelcase- lower case
export const addIngredient = ingName => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: ingName
  }
}

export const removeIngredient = ingName => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: ingName
  }
}
// synchronous action called once the ingredients have been fetched from the API
export const setIngredients = ingredients => {  
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  }
}

//async action
export const initIngredients = () => {
  // console.log('initIngredients');
  return dispatch => {
    axios.get('https://react-my-burger-b8f24.firebaseio.com/ingredients.json')
            .then(response => {
                // console.log('response data:');
                // console.log(response.data);
                dispatch(setIngredients(response.data))
            })
            .catch(error => {
                // this.setState({ error: true });
              dispatch(fetchIngredientsFailed())
            });
  }
}

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  }
}