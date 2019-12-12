import * as actionTypes from '../actions/actionsTypes'
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

const reducer = (state = initialState, action) => {  
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state,action);

    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state,action);
    
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state,action);

    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state,action);

    default:
      return state;
  }
}


const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  }
  const updatedIngredients = updateObject(state.ingredients, updatedIngredient)

  const updatedStateProperties = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true,
  }
  return updateObject(state, updatedStateProperties)
}

const removeIngredient = (state, action) => {
  let nState = {
    ...state,
    ingredients: {
      ...state.ingredients,
      [action.ingredientName]: state.ingredients[action.ingredientName] - 1
    },
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building:true
  }
  return nState;
}

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    error: false,
    totalPrice: 4,
    building: false
  })      
}

const fetchIngredientsFailed = (state, action) => {
  return  updateObject(state,{        
    error: true
  });
}


export default reducer;