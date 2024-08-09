const mongoose = require('mongoose');
const {Schema} = mongoose;

const transactionSchema = new Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String, required:true},
    datetime: {type: Date, required:true},
});
    
const transactionModel = mongoose.model('Transaction',transactionSchema);

module.exports = transactionModel;
