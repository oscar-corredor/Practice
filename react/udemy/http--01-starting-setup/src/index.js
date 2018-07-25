import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = "http://jsonplaceholder.typicode.com"
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN"



axios.interceptors.request.use(request => {
  console.log("Hello from the interceptor");
  console.log(request);

  return request;
},error => {
  console.log(`Error during the request:
  ${error}`);
  return Promise.reject;
})

axios.interceptors.response.use(response => {
  console.log(`Successfull response:
  ${response}`);
  return response;
},error => {
  console.log(`Error during the response:
  ${error}`);
  return Promise.reject;
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
