// import dependencies
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Spinner, Card, ListGroup } from 'react-bootstrap'
import { randomCard } from '../api/scryfall'

// Home component
// Home will act as a landing page
// Home will contain the site's instructions and suggestions for use
    // MTG is a complicated game!
// User will navigate to the various components of the application from here
const Home = (props) => {
    
    // use setState to change the card that is displayed in the Home return component
    const [randomCards, setCards] = useState(null)

    // useEffect hook to load a random card into the component below
    useEffect(() => {
        randomCard()
        .then(res => {
            console.log('this is res.data', res.data)
            return setCards(res.data)
        })
        .catch(console.error)
    }, [])

    // message for waiting for random cards to load
    if (!randomCards){
        return (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading</span>
        </Spinner>)
    } else if (randomCards.length === 0) {
        return <p>No random cards found</p>
    }

    // ---CODE FOR TESTING API CALLS ON THE FRONT END---
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     randomCard()
    //     .then(res => {
    //         return setCards(res.data)
    //     })
    //     console.log('click!')
    // }

    console.log('this is randomCards', randomCards)
    return (
        <>
            {/* ---BUTTON FOR TESTING API CALLS ON THE FRONT END--- */}
            {/* <form onSubmit={handleSubmit}>
                <input type="submit" value="random card"/>
            </form> */}
            <header>
                <h1>Welcome to MTG Deckbuildr!</h1>
            </header>
            <main>
                <p>
                    This app lets you build a Magic: The Gathering deck with cards in the "Standard" format.<br/>
                    To get started, sign-up/sign-in and click on "New Deck" in the header.<br/>
                    Once you've created some decks, you'll be able to view decks you've created in "My Decks", and see what cards are in decks you've created in "Card Collection".<br/>
                    <footer>
                        <small>
                            For more detailed instructions on how to use Deckbuildr, click "About" in the page header.  
                        </small>
                    </footer>
                </p>
            </main>
            {/* Card for displaying a random card on page render */}
            {/* Helps to compel users to check out the app with a brighter and busier landing page */}
            <Card style={{ maxWidth: '15rem'}}>
                <Card.Img variant="top" src={randomCards.image_uris.normal.toString()}/>
                <Card.Title>
                    Card name: {randomCards.name}
                </Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Mana cost: {randomCards.mana_cost}</ListGroup.Item>
                    <ListGroup.Item>Type line: {randomCards.type_line}</ListGroup.Item>
                    <ListGroup.Item>Card text: {randomCards.oracle_text}</ListGroup.Item>
                    <ListGroup.Item>Flavor text: {randomCards.flavor_text}</ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    )
}

export default Home