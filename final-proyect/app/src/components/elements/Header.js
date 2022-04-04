import './Header.sass'
import { IconHamburguer, IconLogo } from '../icons'
import DropDown from './DropDown'
import {useState} from "react"
import {useNavigate} from "react-router-dom"


function Header({ onLogo, onProfile, onProgress, onHelp }) {
    const [isShowDropdown, setShowDropdown] = useState(false)

    const navigate = useNavigate()
    

    const toggleDropdown = () => {
        setShowDropdown(!isShowDropdown)
    }
    const goToLogo = event => {
        event.preventDefault()

        if(onLogo) onLogo()
    }


    return <>
        {!!isShowDropdown && <DropDown className="dropdown" onClose={toggleDropdown}>
        <div>
              <a href='' className='profile__menu' onClick={(event) => {
                    event.preventDefault()
                    onProfile()
            }}>Profile</a>
            </div>
            <div>
                <a href='' className='progress__menu' onClick={(event) => {
                    event.preventDefault()
                    onProgress()
            }}>My Progress</a>
            </div>
            <div>
                <a href='' className='advices__menu' onClick={(event) => {
                    event.preventDefault()
                    onHelp()
            }}>Advices and Help</a>
            </div>
            <div>
                <a className='logout__menu  ' onClick={() => {
                    delete sessionStorage.token
                    navigate("landing")
                }}>Cerrar sesion</a>
            </div>
            </DropDown>}

        <div className='Header'>
            <div className='container__icons'>
            <a href='' onClick={goToLogo}>
                <IconLogo />
            </a>
            <IconHamburguer className="icon__menu" onClick={toggleDropdown} />
            </div>
        </div>
    </>
}

export default Header