const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/redPositive',{
//     useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect('mongodb+srv://lokesh_beyondx:UEbBH3iuxXZfCMK@testdb.bv4vw6r.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;