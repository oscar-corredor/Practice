import axios from 'axios';

const instance = axios.create({
  baseURL : "http://jsonplaceholder.typicode.com"

});

instance.defaults.headers.common['Authorization'] = "AUTH TOKEN fROM instance"

// instance.interceptors.request.use(request => {
//   console.log("Hello from the interceptor");
//   console.log(request);

//   return request;
// },error => {
//   console.log(`Error during the request:
//   ${error}`);
//   return Promise.reject;
// })

// instance.interceptors.response.use(response => {
//   console.log(`Successfull response:
//   ${response}`);
//   return response;
// },error => {
//   console.log(`Error during the response:
//   ${error}`);
//   return Promise.reject;
// })

export default instance;


