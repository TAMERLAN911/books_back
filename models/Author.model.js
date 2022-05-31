const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
    authorName: String,
    authoDescription:String,
})
const Author = mongoose.model('Author', authorSchema)

module.exports = Author;