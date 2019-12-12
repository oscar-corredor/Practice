const redux = require('redux');

const createStore = redux.createStore;
const initialState = {
  counter: 0,
}

//reducer
const rootReducer = (currentState = initialState, action) => {
  if(action.type === 'INC_COUNTER') {
    return {
      ...currentState,
      counter: currentState.counter + 1,
    }
  }
  if(action.type === 'ADD_COUNTER') {
    return {
      ...currentState,
      counter: currentState.counter + action.value,
    }
  }
  return currentState;
}
//store
const store = createStore(rootReducer);
// subscription
store.subscribe(() => {
  console.log('[subscription]',store.getState());
});

//dispatching action
store.dispatch({type: 'INC_COUNTER', });
store.dispatch({type: 'ADD_COUNTER', value: 10});
