const { helpers: { millisToDays } } = require('commons')
const { validators: { validateId, validateString } } = require('commons')
const { models: { User } } = require('data')

function retrieveMoods(userId) {
    validateId(userId)

    return User.findById(userId)
        .then(user => {

            if (!user) throw new Error(`user with id ${userId} not found`)

            const daysNow = millisToDays(Date.now())

            const moods = user.notes.filter(note => {
                if (daysNow - millisToDays(note.createdAt.getTime()) > 90)  {
                    const doc = note._doc

                    doc.id = doc._id.toString()

                    delete doc._id
                    delete doc.__v
                    delete doc.text

                    return true
                }

                return false
            })
            
            return moods
        })
}

module.exports = retrieveMoods