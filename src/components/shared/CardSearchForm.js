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
    
    const {paramaters, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Card Name:</Form.Label>
                <Form.Control 
                    placeholder="Enter card name"
                    name="card-name"
                    onChange={handleChange}
                />
                <Container>
                    <Form.Label>Card Type:</Form.Label>
                    <Form.Check 
                        label="Artifact"
                        id="artifact"
                    />
                    <Form.Check 
                        label="Creature"
                        id="creature"
                    />
                    <Form.Check 
                        label="Enchantment"
                        id="Enchantment"
                    />
                    <Form.Check 
                        label="Instant"
                        id="instant"
                    />
                    <Form.Check 
                        label="Land"
                        id="land"
                    />
                    <Form.Check 
                        label="Planeswalker"
                        id="planeswalker"
                    />
                    <Form.Check 
                        label="Sorcery"
                        id="sorcery"
                    />
                </Container>
                <Container>
                    <Form.Label>Mana Color</Form.Label>
                    <Form.Check 
                        label="White"
                        id="white"
                    />
                    <Form.Check 
                        label="Blue"
                        id="blue"
                    />
                    <Form.Check 
                        label="Black"
                        id="black"
                    />
                    <Form.Check 
                        label="Red"
                        id="red"
                    />
                    <Form.Check 
                        label="Green"
                        id="green"
                    />
                </Container>
                <Button style={{ marginTop: "2%" }} type="submit">Search Cards</Button>
            </Form>
        </Container>
    )
}

export default CardSearchForm