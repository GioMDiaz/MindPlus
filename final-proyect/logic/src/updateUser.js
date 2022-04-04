const { models: { User } } = require('data')
const { validators: {validateId, validateString, validateEmail} } = require('commons')

function updateUser(id, name, email) {
  validateEmail(email)
  validateId(id)
  validateString(name)
  
    return User.findById(id)
    .then((user) => {
      user.name = name || user.name;
      user.email = email || user.email;
  
      return user.save();
    })
}
module.exports = updateUser