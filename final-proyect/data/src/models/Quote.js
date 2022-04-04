const { model } = require('mongoose')
const { quote } = require('../schemas')

const Quote = model('Quote', quote)

module.exports = Quote