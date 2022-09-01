// Import dependencies
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
            const name = e.target.name
            let value = e.target.value

            const updatedValue = { [name]: value }

            return {...prevQuery, ...updatedValue}
        })
        .catch(err => console.log(err))
    }

    // handleSubmit function to manage the submitted forms
    const handleSubmit = (e) => {
        e.preventDefault()

        // Grabbing all checked boxes from the search form
        const checkedBoxes = document.querySelectorAll(":checked")

        // Declaring an empty object to hold the card type parameters and the mana color parameters
        let searchParams = { "cardType": [], "manaColor": []}

        // Using a for loop to iterate through the checked boxes and checking the className of the parent element
            // React Bootstrap components override the initial properties of the HTML element they are using, so
            // checkedBoxes[i].className would not work, as React sets the class of the component to form-input
        for (let i = 0; i < checkedBoxes.length; i++){
            
            // If statements that check for the type of parameter the checked box represents
            // Then pushes that parameter to its appropriate place in the searchParams object
            if (checkedBoxes[i].parentElement.className.includes("cardType")){
                searchParams.cardType.push(checkedBoxes[i].name)
                
            }
            if (checkedBoxes[i].parentElement.className.includes("color")){
                searchParams.manaColor.push(checkedBoxes[i].name)
                
            }
        }

        // If statements that alter the parameter strings depending on their place in the array
        // To include the proper Percent encoding necessary for the Scryfall API call
        
        let cardType = searchParams.cardType.map(param => param = `t%3A${param}`)
        let manaColor = searchParams.manaColor.map(param => param = `c%3A${param}`)
        
        let joinedTypes = cardType.join('%20and%20')
        let joinedColors = manaColor.join('%20and%20')

        let searchString
        if (searchParams.cardType[0] && searchParams.manaColor[0]){
            searchString = `${joinedTypes}%20and%20${joinedColors}`
        }

        if (searchParams.cardType[0] && !searchParams.manaColor[0]){
            searchString = joinedTypes
        }

        if (!searchParams.cardType[0] && searchParams.manaColor[0]){
            searchString = joinedColors
        }

        // Navigate to /cards/results and set the state to be searchString
        // This allows the component that /cards/results lead to (CardIndex) to access and manipulate the information organized here in CardSearch
        navigate('/cards/results', {state:{searchString}})
        
        console.log('this is searchString in CardSearch', searchString)
    }

    // return statement
    return (
        // returns card search form
        <CardSearchForm handleChange={handleChange} handleSubmit={handleSubmit}/>
    )
}

export default CardSearch