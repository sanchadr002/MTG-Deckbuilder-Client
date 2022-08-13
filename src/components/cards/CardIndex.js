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
    const { msgAlert } = props

    // Build a function that extracts the parameters from state and converts them into a searchable string for the Scryfall API
    let searchString = state.searchString

    console.log('this is searchString in CardIndex', searchString)
    scryfallSearch(searchString)
        .then(results => {
            return results.json()
        })
        .then(jsonResults => console.log('this is jsonResults in CardIndex', jsonResults))
    // useEffect(() => {
    //     scryfallSearch(searchString)
    //         .then(results => console.log('this is results in cardIndex', results))
    // })
    // let cardType = searchParams.cardType
    // let manaColor = searchParams.manaColor
    // if (cardType.length > 0){
    //     for (let i = 0; i < cardType.length; i++){
    //         if (i === 0){
    //             let og = cardType[i]
    //             cardType[i] = `t%3A${og}`
    //         }
    //         if (i > 0 && i !== cardType.length - 1){
    //             let og = cardType[i]
    //             cardType[i] = `%20${og}%20`
    //         }
    //         if (manaColor.length > 0 && i === cardType.length - 1){
    //             cardType[i].concat("+")
    //         }
    //     }
    //     let joinedTypes = cardType.join('')
    //     cardType = joinedTypes
    //     return cardType
    // }
    // if (manaColor.length > 0){
    //     for (let i = 0; i < manaColor.length; i++){
    //         if (i === 0){
    //             let og = manaColor[i]
    //             manaColor[i] = `c%3A${og}`
    //         }
    //         if (i > 0 && i !== manaColor.length - 1){
    //             let og = manaColor[i]
    //             manaColor[i] = `%20${og}%20`
    //         }
    //     }
    //     let joinedColors = manaColor.join('')
    //     manaColor = joinedColors
    //     return manaColor
    // }
    // console.log("this is cardType and manaColor in CardIndex", cardType, manaColor)
    // Our card search will be called within useEffect
    // useEffect(() => {
    //     // scryfallSearch(state.query.card)
    //     console.log('this is searchParams in CardIndex', searchParams)
    // })
}

export default CardIndex