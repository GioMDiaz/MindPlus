const authenticateUser = require ('./authenticateUser')
const registerUser = require ('./registerUser')
const retrieveUser = require ('./retrieveUser')
const updateUser = require ('./updateUser')
const deleteUser = require ('./deleteUser')
const createNote = require ('./createNote')
const updateUserPassword = require ('./updateUserPassword')
const retrieveNote = require ('./retrieveNote')
const retrieveMoods = require ('./retrieveMoods')
const retrieveRandomQuote = require ('./retrieveRandomQuote')
const retrieveDaily = require ('./retrieveDaily')

module.exports =  {
    authenticateUser,
    registerUser,
    retrieveUser,
    updateUser,
    deleteUser, 
    createNote,
    updateUserPassword,
    retrieveNote,
    retrieveMoods,
    retrieveRandomQuote,
    retrieveDaily
}