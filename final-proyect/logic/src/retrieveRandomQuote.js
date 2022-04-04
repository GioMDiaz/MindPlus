const { models: { Quote } } = require('data')

function retrieveRandomQuote () {

    return Quote.count()
    .then(totalQuotes => {

        const random = Math.round(Math.random() * totalQuotes -1)

        return Quote.findOne().skip(random).lean()
    })
    .then(quote => { // const quote = quote._doc
            quote.id = quote._id.toString()
            delete quote._id
            delete quote.__v
            return quote
    })
}   
module.exports = retrieveRandomQuote