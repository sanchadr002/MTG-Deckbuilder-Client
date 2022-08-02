// import dependencies
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardSearchForm from './CardSearchForm'

// set up component
const CardSearch = (props) => {
    // set up hooks & variables
    const navigate = useNavigate()
    const [query, setQuery] = useState(null)

    // handleChange function to manage our card name text inputs
    const handleChange = (e) => {
        e.persist()
        setQuery(prevQuery => {
            const cardName = e.target.cardName
            let value = e.target.value

            const updatedValue = { [cardName]: value }

            return {...prevQuery, ...updatedValue}
        })
    }

    // ---FIGURE OUT HOW TO SET QUERY TO ANY OF OUR ADDITIONAL POSSIBLE INPUTS---
    // currently, query only works for the card name being submitted
    // how can we add all the additional inputs to the query?
    // could we create an object with keys that match the search paramaters, and their values are what the user has input?
    // how can we then reliably turn that into a string for our API call?

    // handleSubmit function to manage the submitted forms
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/cards/results', {state:{query}})
    }

    // return statement
    return (
        // returns card search form
        <CardSearchForm handleChange={handleChange} handleSubmit={handleSubmit}/>
    )
}

export default CardSearch