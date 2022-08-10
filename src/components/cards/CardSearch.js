// import dependencies
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { scryfallSearch } from '../../api/scryfall'
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
            const name = e.target.name
            let value = e.target.value

            const updatedValue = { [name]: value }

            return {...prevQuery, ...updatedValue}
        })
        .catch(err => console.log(err))
    }

    // ---FIGURE OUT HOW TO SET QUERY TO ANY OF OUR ADDITIONAL POSSIBLE INPUTS---
    // currently, query only works for the card name being submitted
    // how can we add all the additional inputs to the query?
    // could we create an object with keys that match the search paramaters, and their values are what the user has input?
    // how can we then reliably turn that into a string for our API call?

    // handleSubmit function to manage the submitted forms
    const handleSubmit = (e) => {
        e.preventDefault()
        const checkedBoxes = document.querySelectorAll(":checked")
        let searchParams = []
        for (let i = 0; i < checkedBoxes.length; i++){
            searchParams.push(checkedBoxes[i].name)
        }
        setQuery(() => {
            return searchParams
        })
        navigate('/cards/results', {state:{query}})
        // console.log('this is query in CardSearch', query)
        // console.log('this is searchParams in CardSearch', searchParams)
        // console.log('this is checkedBoxes in CardSearch', checkedBoxes)
    }

    // return statement
    return (
        // returns card search form
        <CardSearchForm handleChange={handleChange} handleSubmit={handleSubmit}/>
    )
}

export default CardSearch