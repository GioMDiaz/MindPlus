const { Schema } = require('mongoose')


const note = new Schema({

    text: {
        type: String,
        required: true
    },

    mood: {
        type: Number,
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = note
