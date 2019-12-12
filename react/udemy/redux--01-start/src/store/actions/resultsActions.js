import * as actionTypes from './actionTypes';

export const saveResult = result => {
  return {
    type: actionTypes.STORE_RESULT,
    result: result,
  };
}

export const storeResult = (result) => {

  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(saveResult(result))
    }
      , 2000)
  }
}
  export const deleteResult = (id) => {
    return {
      type: actionTypes.DELETE_RESULT,
      resultId: id
    };
  }