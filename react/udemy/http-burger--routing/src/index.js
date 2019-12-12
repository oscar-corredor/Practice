import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//                 inject into the app 
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import burgerBuilderReducer from './store/reducers/burgerBuilderReducer';
import orderReducer from './store/reducers/orderReducer';
import authReducer from './store/reducers/authReducer';

import thunk from 'redux-thunk'

// const store = createStore(reducer);
const mainReducer = combineReducers({
  burgerBuilderReducer : burgerBuilderReducer,
  orderReducer: orderReducer,
  authReducer: authReducer,
})

// with middleware and enhancers -- whatever that might be...
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(mainReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

// simple one
// const store = createStore(
//   burgerBuilderReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
