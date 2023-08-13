// Import necessary modules and set up Express app
const express = require('express');
const app = express();

// port connecxtion
const port = process.env.PORT || 3001;

// layout for ejs(embedede javascript instead of html)
const expressLayouts = require('express-ejs-layouts');

// db connection
const db = require('./config/mongoose');

// middlewares
app.use(express.json()); 
// routes


// view engine setup (ejs)
app.use(express.urlencoded());

// acceseing static files such as css images js
app.use(express.static('./assets'));
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.use('/', require('./routes/api')); 

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
