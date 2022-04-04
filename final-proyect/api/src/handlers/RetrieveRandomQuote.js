const { retrieveRandomQuote } = require('logic')

module.exports = (req, res) => {
    try {

        retrieveRandomQuote()
            .then(quote => res.json(quote))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}