const { Schema } = require('mongoose')


const quote = new Schema({
    text: {
        type: String,
        required: true
    }
})
module.exports = quote