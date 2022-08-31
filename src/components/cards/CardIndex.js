// Import dependencies
import React, { useState, useEffect, useMemo } from 'react'
import { Card, Button, Spinner } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { scryfallSearch } from '../../api/scryfall'
import MTGCard from './MTGCard'
import Pagination from '../shared/pagination/Pagination'

// Declare a style for our bootstrap Cards for easy reference
const cardContainerLayout = {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap"
}

// Declare CardIndex component
// Our CardIndex component will contain the code for the card search results page

const CardIndex = (props) => {
    
    // Retrieves object data from CardSearch
    const { state } = useLocation()
    const [searchResults, setSearchResults] = useState(null)
    // const [currentPage, setCurrentPage] = useState(1)
    const { msgAlert } = props
    
    // Build a function that extracts the parameters from state and converts them into a searchable string for the Scryfall API
    let searchString = state.searchString

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
        
    // console.log('this is searchResults in CardIndex', searchResults)

    let cardResults

    if (!searchResults){
        return <Spinner />
    } else if (searchResults.length === 0){
        return <small>No matches with your current parameters.</small>
    }

    if (searchResults.length > 0){
        return (
            cardResults = 
                <Pagination 
                    data={searchResults}
                    RenderComponent={MTGCard}
                    title="Search Results"
                    pageLimit={5}
                    dataLimit={10}
                />
        )
    } else {
        return (
            <h1>No cards to display</h1>
        )
    }

    return (
        <>
            <div style={cardContainerLayout}>
                {cardResults}
            </div>
        </>
    )
}

export default CardIndex