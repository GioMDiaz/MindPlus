import './Landing.sass'
import { Button } from './elements'

function Landing({ onLogin, onRegister }) {

    const goToLogin = event => {
        event.preventDefault()

        onLogin()
    }

    const goToRegister = event => {
        event.preventDefault()

        onRegister()
    }

    return <div className="landing">
        <div>
            <img className='landing__title' src='https://mind.plus/wp-content/uploads/2021/11/Mind-Plus_224x92-03.png' alt=''></img>
        </div>
        <img className="landing__logo" src="https://i.giphy.com/media/fsbKeqwwkmE6LodM3T/giphy.webp" alt="" ></img>
        <div className='landing__container'>
            <Button className="landing__login-button" href="" onClick={goToLogin}>Login</Button>
            <Button className="landing__register-button" href="" onClick={goToRegister}>Register</Button>
        </div>
    </div>
}
export default Landing