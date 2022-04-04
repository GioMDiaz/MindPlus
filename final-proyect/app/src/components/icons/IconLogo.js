import './IconLogo.sass'

function IconLogo({onClick}) {

    const onLogo = event => {
        event.preventDefault()
        if(onClick) onClick()

    }
    return<>
    <img className='icon__logo' src='https://mind.plus/wp-content/uploads/2021/11/Mind-Plus_224x92-03.png' alt='' onClick={onLogo}/>
</>
}

export default IconLogo
