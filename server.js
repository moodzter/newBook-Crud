const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const BookController = require('./controllers/bookController.js')

//=====>WHAT WE'RE USING
app.use(cors())
app.use(express.json())
app.use('/books', BookController)

//=====>LETTING ME KNOW EVERYTINGS CONNECTED
mongoose.connect('mongodb://localhost:27017/bookcrud')
mongoose.connection.once('open', () => {
    console.log('mongod is connected...')
})
app.listen(3000, () => {
    console.log('Listening...')
})