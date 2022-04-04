import './IconProfile.sass'
import { HiOutlineUser } from 'react-icons/hi';

function IconProfile({onClick}) {

    const onProfile = event => {
        event.preventDefault()
        if(onClick) onClick()

    }
    return<>
    <HiOutlineUser className='profile__icon' onClick={onProfile}/>
</>
}

export default IconProfile
