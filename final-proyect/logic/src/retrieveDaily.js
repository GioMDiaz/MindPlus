const { helpers: { millisToDays } } = require('commons')
const { validators: { validateId } } = require('commons')
const { models: { User } } = require('data')

function retrieveDaily(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)
        
            const found = user.notes.filter(note => millisToDays(Date.now()) - millisToDays(note.createdAt.getTime()) > 90) || null

            return found
        })
}
module.exports = retrieveDaily