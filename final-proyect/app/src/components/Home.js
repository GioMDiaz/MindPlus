import './Home.sass'
import { useEffect, useState } from 'react'
import { retrieveUser, retrieveRandomQuote, retrieveNote } from '../logic'
import { Header, RandomQuote, ModalCreateNote, Button } from './elements'
import moment from "moment"

function Home({ onLogo, onProfile, onProgress, onHelp }) {
    const [name, setName] = useState()
    const [quote, setQuote] = useState({})
    const [note, setNote] = useState()
    const [isShowModal, setIsShowModal] = useState()

    const toggleModal = () => {
        setIsShowModal(true)
    }

    const closeModal = () => {
        setIsShowModal(false)
    }

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    useEffect(() => {
        try {
            retrieveRandomQuote()
                .then((quote) => {
                    setQuote(quote)
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }, [])

    const onSubmit = (event) => {
        event.preventDefault()

        try {
            retrieveNote(sessionStorage.token)
                .then((note) => {
                    setNote(note)
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    return <>
        <div className='home'>
            <Header onLogo={onLogo} onProfile={onProfile} onProgress={onProgress} onHelp={onHelp} />
            <div className='home__content'>
                <div className='wrapper__text'>
                    <h1 className='title'>Happy day, {name}</h1>
                    <h2 className='subheading'>Enjoy the next random phrase</h2>
                    <h2 className='subheading'>every time you update</h2>
                </div>
                <div className='card__quote'><RandomQuote quote={quote} /></div>
            </div>
            <div className='container'>
                <Button onClick={toggleModal}>Create Note</Button>
                <Button onClick={onSubmit}>Retrieve Note</Button>
                {note && <div className='retrieve__note'>
                    <p>{note.text}</p>
                    <p>{moment(note.createdAt).format("L")}</p>h
                </div>}
            </div>
            {!!isShowModal && <ModalCreateNote onClose={closeModal} />}
        </div>
    </>
}

export default Home