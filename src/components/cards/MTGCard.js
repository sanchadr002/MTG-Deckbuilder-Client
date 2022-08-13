// Import dependencies
import React from 'react'   
import { Card, ListGroup } from 'react-bootstrap'

// Declare component
    // This component will be used to display cards in various areas of the app
        // Including the home page for random cards, and the search results page with cards the user has searched for

    // This card component will take the data returned from API call for a random card, and API calls for searched cards

    // So, we will create a bootstrap Card component with different fields for the mtgCard name, the 
    // mana cost, the card type, the card's oracle text (if any), and flavor text (if any)

    // This component will then go into other components where mtgCard need to be displayed.

    // The hooks for the mtgCard will be used in the files where mtgCard needs to show up
        // The API call for a random mtg card will be used on the home page
        // The API call for searched cards will be used in the search/results page
const MTGCard = (props) => {

    // Declare our props that have been passed into this component
    const {cardInfo} = props
    
    // Declare our return statement that will contain the bootstrap Card component that displays the mtg card information
    return (
        <Card style={{ maxWidth: "15rem"}}>
            <Card.Img variant="top" src={cardInfo.image_uris.normal.toString()}/>
            <Card.Title>
                {cardInfo.name}
            </Card.Title>
            <ListGroup variant="flush">
                <ListGroup.Item>Mana Cost: {cardInfo.mana_cost}</ListGroup.Item>
                <ListGroup.Item>Card Type: {cardInfo.type_line}</ListGroup.Item>
                <ListGroup.Item>Oracle Text: {cardInfo.oracle_text}</ListGroup.Item>
                {
                    cardInfo.flavor_text && <ListGroup.Item>Flavor Text: {cardInfo.flavor_text}</ListGroup.Item>
                }
                {/* <ListGroup.Item>Flavor Text: {cardInfo.flavor_text}</ListGroup.Item> */}
            </ListGroup>
        </Card>
    )
}

export default MTGCard