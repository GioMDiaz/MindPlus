const { models: { User }} = require('data');
const { validators: { validateId, validatePassword } } = require('commons')

function deleteUser(userId, password) {
    validateId(userId)
    validatePassword(password)
      
        return User.deleteOne({ _id: userId, password })
        .then(result =>  {
            if(result.deletedCount === 0) throw new Error (`User with Id ${id} does not exist`)
            else{
            }
            
    })
}
module.exports = deleteUser;