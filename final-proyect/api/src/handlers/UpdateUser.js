const { updateUser } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers.js')

module.exports = (req, res) => {
    try {
        const { headers: { authorization }, body: { name, email } } = req

        const userId = verifyTokenAndGetUserId(req)

        updateUser(userId, name, email)
            .then(() => res.status(200).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

 