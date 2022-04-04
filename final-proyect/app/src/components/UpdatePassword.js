import { updateUserPassword } from '../logic'
import { Header, Input, Button } from './elements'
import './UpdatePassword.sass'

function UpdatePassword({ onBack, onProfile, onProgress, onLogo, onHelp }) {

    const updatePassword = event => {
        event.preventDefault()

        const { target: { currPassword: { value: currPassword }, newPassword: { value: newPassword }, confirmPassword: { value: confirmPassword } } } = event

        try {
            updateUserPassword(sessionStorage.token, currPassword, newPassword, confirmPassword)
                .then(() => { alert('password updated') })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    const goBack = event => {
        event.preventDefault()

        onBack()
    }

    return <div className="update-password">
        <Header onLogo={onLogo} onProfile={onProfile} onProgress={onProgress} onHelp={onHelp} />
        <h1>Update Password</h1>
        <form className="update-password__form" onSubmit={updatePassword}>
            <label className='labels' htmlFor="currPassword">Current password</label>
            <Input id="currPassword" className="update-password__curr-password-input" type="password" name="currPassword" />
            <label className='labels' htmlFor="newpassword">New password</label>
            <Input id="password" className="update-password__password-input" type="password" name="newPassword" />
            <label className='labels' htmlFor="confirmPassword">Confirm new password</label>
            <Input id="confirmPassword" className="update-password__re-password-input" type="password" name="confirmPassword" />
            <Button className='update__password-button'>Update password</Button>
        </form>
        <a className="update-password__back-link" href="" onClick={goBack}>Back</a>
    </div>

}

export default UpdatePassword