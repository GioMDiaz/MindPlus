import authenticateUser from "../logic/authenticateUser"
import { Input } from './elements'
import './Login.sass'
import { Button } from './elements'

function Login({ onHome, onRegister }) {

    const goToRegister = event => {
        event.preventDefault()
        onRegister()
    }
    const login = event => {
        event.preventDefault()
        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            authenticateUser(email, password)
                .then((token) => {
                    sessionStorage.token = token
                    onHome()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    return <div className="login">
        <h1>LOGIN</h1>
        <form onSubmit={login} className="login__form" >
            <Input className="input__mail" type="email" name="email" placeholder="E-mail" />
            <Input className='input__password' type="password" name="password" placeholder="Password" />
            <Button className="login__goHome">Login</Button>
        </form>
        <a className="register__link" onClick={goToRegister}>Register</a>
    </div>
}
export default Login