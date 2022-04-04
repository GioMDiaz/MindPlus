import './Profile.sass'
import { retrieveUser, updateUser } from '../logic'
import { useState, useEffect } from 'react'
import { Header, Button } from './elements'

function Profile({ onLogo, onProfile, onUpdatePassword, onDeleteAccount, onLogOut, onProgress, onHelp }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(({ name, email }) => {
                    setName(name)
                    setEmail(email)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const updateProfile = event => {
        const { target: { name: { value: name }, email: { value: email } } } = event

        try {

            updateUser(sessionStorage.token, name, email)
                .then(() => {
                    setName(name)
                    setEmail(email)
                })
                .catch(error => { throw error })
        } catch ({ message }) {
            alert({ message })
        }
    }
    const onSubmit = event => {
        event.preventDefault()
        updateProfile(event)
    }
    const goToUpdatePassword = event => {
        event.preventDefault()

        onUpdatePassword && onUpdatePassword(event)
    }
    const goToDeleteAccount = event => {
        event.preventDefault()

        onDeleteAccount(event)
    }
    const logOut = event => {
        event.preventDefault()
        delete sessionStorage.token
        onLogOut()
    }
    return <div className='profile'>
        <Header onLogo={onLogo} onProfile={onProfile} onProgress={onProgress} onHelp={onHelp} />
        <h1>Profile</h1>
        <form className='profile__form' onSubmit={onSubmit} method='post'>
            <input className="profile__name-input" type="text" name="name" placeholder="name" defaultValue={name} />
            <input className="profile__email-input" type="email" name="email" placeholder="e-mail" defaultValue={email} />
            <Button className='update__profile-button'>Update profile</Button>

            <a className="profile__update-password-link" href="" onClick={goToUpdatePassword}>Update password</a>
            <a className="profile__delete-account-link" href="" onClick={goToDeleteAccount}>Delete account</a>
        </form>
        <button className='logout__button' type='submit' onClick={logOut}>LogOut</button>

    </div>
}

export default Profile