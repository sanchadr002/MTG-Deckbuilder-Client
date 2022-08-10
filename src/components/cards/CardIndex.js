// Import dependencies
import React, { useState, useEffect } from 'react'
import { Card, Button, Spinner } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { scryfallSearch } from '../../api/scryfall'

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
    const { card, msgAlert } = props

    // Our card search will be called within useEffect
    useEffect(() => {
        scryfallSearch(state.query.card)
    })
}

