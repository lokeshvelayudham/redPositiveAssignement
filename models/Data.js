const mongoose = require('mongoose');

// Create a mongoose schema for your data
const dataSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    email: String,
    hobbies: String,
},{
    timestamps: true
});


const DataModel = mongoose.model('Data', dataSchema);
module.exports = DataModel;