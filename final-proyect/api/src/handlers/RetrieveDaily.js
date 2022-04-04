const { verifyTokenAndGetUserId } = require('../helpers')
const { retrieveDaily } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        retrieveDaily(userId)
            .then(user => res.json(user))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}