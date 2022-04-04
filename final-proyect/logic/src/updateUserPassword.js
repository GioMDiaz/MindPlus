const { validateId, validatePassword } = require('commons/src/validators')
const { models: { User } } = require('data')

function updateUserPassword(id, password, newPassword) {
    validateId(id)
    validatePassword(password)
    validatePassword(newPassword)

    return User.findById(id)
        .then(user => {
            if (!user) throw new Error (`user with ${id} does not exist`)
            if (user.password === password) 
                return User.updateOne({_id: id},{password: newPassword})
                    .then(() => {})
            else throw new Error (`wrong credentials`) 
        
        })
    }

module.exports = updateUserPassword