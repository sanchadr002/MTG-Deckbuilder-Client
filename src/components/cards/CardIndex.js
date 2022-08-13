// Import dependencies
import React, { useState, useEffect } from 'react'
import { Card, Button, Spinner } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { scryfallSearch } from '../../api/scryfall'
import MTGCard from './MTGCard'

// Declare a style for our bootstrap Cards for easy reference
const cardContainerLayout = {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap"
}

// Declare CardIndex component
    // Our CardIndex component will contain the code for the card search results page
        // We will declare that if searchResults exists, then to use a create a series of cards using .map() to display our search results
const CardIndex = (props) => {

    // Retrieves object data from CardSearch
    const { state } = useLocation()
    const [searchResults, setSearchResults] = useState(null)
    const { msgAlert } = props

    // Build a function that extracts the parameters from state and converts them into a searchable string for the Scryfall API
    let searchString = state.searchString

    console.log('this is searchString in CardIndex', searchString)
    useEffect(() => {
        scryfallSearch(searchString)
            .then(callResults => {
                return callResults.json()
            })
            .then(cardObjects => {
                setSearchResults(cardObjects.data)
            })
            .catch(err => console.log(err))
    }, [])

    console.log('this is searchResults in CardIndex', searchResults)

    if (!searchResults){
        return <Spinner />
    } else if (searchResults.length === 0){
        return <small>No matches with your current parameters.</small>
    }

    let cardCards

    if (searchResults.length > 0){
        cardCards = searchResults.map(card => (
            <MTGCard cardInfo={card}/>
        ))
    }


    return (
        <>
            <div style={cardContainerLayout}>
                {cardCards}
            </div>
        </>
    )
}

export default CardIndex