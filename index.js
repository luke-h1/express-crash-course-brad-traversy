const express = require('express');
const path = require('path');
const app = express(); // init express
const logger = require('./middleware/logger'); 
const bodyParser = require('body-parser'); 
const exphbs = require('express-handlebars');




// handlebars middleware 
app.engine('handlebars', exphbs({defaultLayout: 'main'})); 
app.set('view engine', 'handlebars');  


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));


// Members API route 
app.use('/api/members', require('./routes/api/members'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));

// body parser middleware
app.use(bodyParser.json())

// url encoded data 
app.use(bodyParser.urlencoded({ extended: true }))
