import './Progress.sass'
import { Header, Button } from './elements'
import { retrieveDaily, retrieveMoods } from '../logic'
import { useState, useEffect } from 'react'
import moment from "moment"
import { VerticalBar } from './elements'

function Progress({ onLogo, onProfile, onProgress, onHelp }) {
    const [quotes, setQuotes] = useState({})
    const [moods, setMoods] = useState({})

    useEffect(() => {

        try {
            retrieveMoods(sessionStorage.token)
                .then((moods) => {
                    setMoods(moods)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

    }, [])

    const onSubmit = (event) => {
        event.preventDefault()

        try {
            retrieveDaily(sessionStorage.token)
                .then((quotes) => {
                    setQuotes(quotes)
                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }

    return <div className='progress'>
        <Header onLogo={onLogo} onProfile={onProfile} onProgress={onProgress} onHelp={onHelp} />
        <h1>My Progress</h1>
        {moods.length && <VerticalBar moods={moods} /> || <h1 className='text__progress'>Remember that 90 days must pass before you can access these features.
Continue creating your daily notes and soon you will be able to see how much progress you have made!!</h1>}
        <Button className='my__daily-button' onClick={onSubmit}>MyDaily</Button>
        {!!quotes.length && <ul className='daily__quotes'>
            {quotes.map(quote => <h1 className='my__daily' key={quote._id}>
                <p>{quote.text}</p>
                <p>{moment(quote.createdAt).format("L")}</p>
            </h1>)}
        </ul>}
    </div>

}

export default Progress