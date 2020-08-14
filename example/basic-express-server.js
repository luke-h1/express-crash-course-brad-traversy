const express = require('express'); 

// init express 
const app = express(); 

// create endpoint & route handlers 
app.get('/', (req, res) => { 
  res.send(`Hello world!`)
}); 


// listen on port 
app.listen(5000);