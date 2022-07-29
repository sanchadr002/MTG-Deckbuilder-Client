// import dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// Home component
// Home will act as a landing page
// Home will contain the site's instructions and suggestions for use
    // MTG is a complicated game!
// User will navigate to the various components of the application from here
const Home = (props) => {

    const randomCard = () => {
        axios('https://api.scryfall.com/cards/random')
            .then(card => console.log(card))
            .catch(() => console.error())
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        randomCard()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="random card"/>
            </form>
        </>
    )
}

export default Home