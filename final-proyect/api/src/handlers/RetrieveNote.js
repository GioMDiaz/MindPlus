const { verifyTokenAndGetUserId } = require('../helpers')
const { retrieveNote } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        retrieveNote(userId)
            .then(user => res.json(user))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}