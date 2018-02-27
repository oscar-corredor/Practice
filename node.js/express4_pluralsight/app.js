const express = require('express');

const app = express();

const port = 8080;

// setup the folder with static files
app.use(express.static('public'));
app.use(express.static('src/views'));

function homeIndex(request, response) {
  response.send('Hello World');
}
function booksIndex(request, response) {
  response.send('Hello Books');
}
app.get('/', homeIndex);
app.get('/books', booksIndex);
app.listen(port, () => console.log(`Listening on port ${port}!`));
