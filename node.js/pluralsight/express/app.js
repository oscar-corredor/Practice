const express = require('express');
const chalk = require('chalk');

var app = express();

app.get('/', (request, response) => {
    response.send('hellow world.')
});

app.listen(3000, () => {
    console.log(`ready on port ${chalk.green('3000')}.`)    
});