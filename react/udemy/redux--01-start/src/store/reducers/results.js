import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'

const initialState = {
  results: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result })})
        
    case actionTypes.DELETE_RESULT:
        // const resultsCopy = [...state.results]
        const updatedArray = state.results.filter((element) => element.id !== action.resultId)
        return updateObject(state, {
          results: updatedArray })
          
    default:
      return state;
      }
}

  export default reducer;