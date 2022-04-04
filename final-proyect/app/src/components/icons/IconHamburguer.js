import { HiMenu } from 'react-icons/hi';
import './IconHamburguer.sass'

function IconHamburguer({onClick}) {

    const onHamburguer = event => {
        event.preventDefault()
        if (onClick) onClick()
    }

    return <>
    <HiMenu className='hamburguer__icon'onClick={onHamburguer}/>
</>
}
export default IconHamburguer