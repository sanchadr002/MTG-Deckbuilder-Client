// import dependencies
import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

// Card Search Form component
    // used for searching cards to add to decks
    // placed in shared folder to possibly add non-user card search functionality that just 
        // returns card with no button to add to a deck
    // currently can search for cards by name, card type, and mana color
    // due to transforming cards, mana cost requires additional logic to account for card 
        // side with no mana cost
    // mana cost paramater will be added later
const CardSearchForm = (props) => {
    
    const {handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            
            <Form onSubmit={handleSubmit}>
                <Form.Label>Card Name:</Form.Label>
                <Form.Control 
                    placeholder="Enter card name"
                    name="cardName"
                    onChange={handleChange}
                />
                <Container>
                    
                    <Form.Label>Card Type:</Form.Label>
                    <Form.Check 
                        label="Artifact"
                        name="artifact"
                        id="artifact"
                        className="cardType"
                    />
                    <Form.Check 
                        label="Creature"
                        name="creature"
                        id="creature"
                        className="cardType"
                    />
                    <Form.Check 
                        label="Enchantment"
                        name="enchantment"
                        id="Enchantment"
                        className="cardType"
                    />
                    <Form.Check 
                        label="Instant"
                        name="instant"
                        id="instant"
                        className="cardType"
                    />
                    <Form.Check 
                        label="Land"
                        name="land"
                        id="land"
                        className="cardType"
                    />
                    <Form.Check 
                        label="Planeswalker"
                        name="planeswalker"
                        id="planeswalker"
                        className="cardType"
                    />
                    <Form.Check 
                        label="Sorcery"
                        name="sorcery"
                        id="sorcery"
                        className="cardType"
                    />
                </Container>
                <Container>
                    <Form.Label>Mana Color</Form.Label>
                    <Form.Check 
                        label="White"
                        name="white"
                        id="white"
                        className="color"
                    />
                    <Form.Check 
                        label="Blue"
                        name="blue"
                        id="blue"
                        className="color"
                    />
                    <Form.Check 
                        label="Black"
                        name="black"
                        id="black"
                        className="color"
                    />
                    <Form.Check 
                        label="Red"
                        name="red"
                        id="red"
                        className="color"
                    />
                    <Form.Check 
                        label="Green"
                        name="green"
                        id="green"
                        className="color"
                    />
                </Container>
                <Button style={{ marginTop: "2%" }} type="submit">Search Cards</Button>
            </Form>
        </Container>
    )
}

export default CardSearchForm