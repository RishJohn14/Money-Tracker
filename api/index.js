const express = require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction = require('./models/Transaction.js');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json())

app.get('/test', (req,res)=>{
    res.json("Test OK")
});

app.post('/transaction', async (req,res)=>{
    await mongoose.connect(process.env.MONGO_URL);
    const {name,price,description,datetime} = req.body; 
    const transaction = await Transaction.create({name,price,description,datetime});
    res.json(transaction);
});

app.get('/transactions', async (req,res)=>{
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();
    res.json(transactions);

})

app.listen(4000);

