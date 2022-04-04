import './DeleteAccount.sass'
import { deleteUser } from '../logic'
import { Header, Button, Input } from './elements'

function DeleteAccount({ onBack, onLogo, onProfile, onHelp, onProgress, onDeletedAccount }) {

    const goBack = event => {
        event.preventDefault()
        onBack()
    }

    const deleteAccount = event => {
        event.preventDefault()

        const password = event.target.password.value

        try {
            deleteUser(sessionStorage.token, password)
                .then(() => onDeletedAccount())
                .catch(error => { throw error })
        } catch ({ message }) {
            alert(message)
        }
    }
    return <div className="delete__account">
        <Header onLogo={onLogo} onProfile={onProfile} onProgress={onProgress} onHelp={onHelp} />
        <form className="form__delete-account" method="post" onSubmit={deleteAccount}>
            <Input className="delete-account__password-input" type="password" name="password" placeholder="Password" />
            <Button className="delete-acount__submit">Delete Account</Button>
            <a className="delete-account__back-link" href="" onClick={goBack}>Back</a>
        </form>
    </div>

}

export default DeleteAccount