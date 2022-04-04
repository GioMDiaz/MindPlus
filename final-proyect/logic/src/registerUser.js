const { models: { User } } = require('data')
const { validators: { validateString, validateEmail, validatePassword } } = require('commons')

function registerUser(name, email, password) {
    debugger
validateString(name, 'name')
validateEmail(email)
validatePassword(password)

    return User.create({ name, email, password })
        .then(user => { })
}
module.exports = registerUser