const mongoose=require('mongoose')

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    cover: String,
    price: Number,
    publishDate: String
})

const Books = mongoose.model('Book', bookSchema)

module.exports = Books