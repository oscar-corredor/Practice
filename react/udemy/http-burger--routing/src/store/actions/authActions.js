import * as actionTypes from './actionsTypes'

import axios from 'axios';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  }
}

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  }
}

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      console.log('session time up!');
      dispatch(logOut());
    }, expirationTime * 1000)
  }
}

export const logOut = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const setAuthRedirectPath = path => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  }
}

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC4a6gifDRt7ZIrkWnY9xtcs-aw3s_j05U`;
    if (!isSignup) {
      url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC4a6gifDRt7ZIrkWnY9xtcs-aw3s_j05U`
    }

    axios.post(url,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).then(response => {
        localStorage.setItem('token', response.data.idToken);
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      }).catch(error => {
        // console.log('auth error');
        // console.log(error.response);
        dispatch(authFail(error.response.data.error))
      })
  }
}

export const authCheckState = () => {
  return dispatch => {

    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    if (expirationDate > new Date()) {
      console.log(expirationDate);
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      if (token && userId) {

        dispatch(authSuccess(token, userId));
        let sessionSecondsLeft = expirationDate.getTime() - new Date().getTime();
        console.log(`seconds left: ${sessionSecondsLeft}`);
        dispatch(checkAuthTimeout(sessionSecondsLeft/1000));
      }
    }
    else dispatch(logOut());
  }
}