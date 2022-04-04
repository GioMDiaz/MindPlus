import { Input, Button } from './elements'
import registerUser from "../logic/registerUser"
import './Register.sass'

function Register({ onLogin, onRegistered }) {

    const goToLogin = event => {
        event.preventDefault()

        onLogin()
    }

    const register = event => {
        event.preventDefault()


        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            registerUser(name, email, password)
                .then(() => onRegistered())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    return <div className='register'>
        <h1>REGISTER</h1>
        <form onSubmit={register} className="register__form" >
            <Input type="name" name="name" placeholder="Name" />
            <Input type="email" name="email" placeholder="E-mail" />
            <Input type="password" name="password" placeholder="Password" />
            <Button className="register__button">Register</Button>
        </form>
        <a className="login__link" onClick={goToLogin}>Login</a>
    </div>
}
export default Register