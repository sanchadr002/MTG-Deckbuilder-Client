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

    const handleSubmit = (e) => {
        e.preventDefault()
        randomCard()
        .then(res => {
            return setCards(res.data)
        })
        console.log('click!')
    }

    console.log('this is randomCards', randomCards)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="random card"/>
            </form>
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