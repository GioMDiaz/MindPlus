const { updateUserPassword } = require('logic')
const { verifyTokenAndGetUserId } = require('../helpers.js')

module.exports = (req, res) => {
    try {
        const { headers: { authorization }, body: { oldPassword, newPassword } } = req

        const userId = verifyTokenAndGetUserId(req)

        updateUserPassword(userId, oldPassword, newPassword)
            .then(() => res.status(204).send())
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
