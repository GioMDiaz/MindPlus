const { validators: { validateId, validateString } } = require('commons')
const { helpers: { existNote } } = require('commons')
const { millisToDays } = require('commons/src/helpers')
const { models: { Note, User } } = require('data')

function createNote(userId, text, mood) {  // 
    validateString(text)
    validateString(mood)
    validateId(userId)

    return User.findById(userId)
        .then(user => {
            if (!user) throw new Error(`User with ${userId} does not exist`)
            
            const hasNoteToday = user.notes.some(note => millisToDays(note.createdAt.getTime()) === millisToDays(Date.now()))

            if (hasNoteToday) throw new Error(`today's note already exists`)

            const newNote = new Note({ text, mood })

            user.notes.push(newNote)

            return user.save()
        })
            .then(user => {})
}
module.exports = createNote