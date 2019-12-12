import * as actionTypes from '../actions/actionsTypes'
import {updateObject} from '../utility'

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
}

const purchaseBurgerStart = (currentState, action) => {
  return updateObject(currentState,{        
    loading: true
  });
}
const purchaseBurgerSuccess = (currentState, action) => {
  return {
    ...currentState,
    loading: false,
    // concat returns a new array
    orders: currentState.orders.concat({
      ...action.orderData,
      id: action.orderId,
    }),
    purchased: true,
  }
}
const purchaseBurgerFail = (currentState, action) => {
  return {
    ...currentState,
    loading: false,
  }
}
const purchaseBurgerInit = (currentState, action) => {
  return {
    ...currentState,
    purchased: false
  }
}
const fetchOrdersStart = (currentState, action) => {
  return {
    ...currentState,
    loading:true
  }
}
const fetchOrdersSuccess = (currentState, action) => {
  return {
    ...currentState,
    loading:false,
    orders: action.orders,
  }
}
const fetchOrdersFail = (currentState, action) => {
  return {
    ...currentState,
    loading:false
  }
}


const reducer = (currentState = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(currentState, action);

    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(currentState, action);

    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(currentState, action);

    case actionTypes.PURCHASE_INIT:
      return purchaseBurgerInit(currentState, action);

    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(currentState,action);

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(currentState, action);

    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(currentState,action);

    default:
      return currentState;
  }
}

export default reducer;