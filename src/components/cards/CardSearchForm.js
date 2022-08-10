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
                        class="cardType"
                    />
                    <Form.Check 
                        label="Creature"
                        name="creature"
                        id="creature"
                        class="cardType"
                    />
                    <Form.Check 
                        label="Enchantment"
                        name="enchantment"
                        id="Enchantment"
                        class="cardType"
                    />
                    <Form.Check 
                        label="Instant"
                        name="instant"
                        id="instant"
                        class="cardType"
                    />
                    <Form.Check 
                        label="Land"
                        name="land"
                        id="land"
                        class="cardType"
                    />
                    <Form.Check 
                        label="Planeswalker"
                        name="planeswalker"
                        id="planeswalker"
                        class="cardType"
                    />
                    <Form.Check 
                        label="Sorcery"
                        name="sorcery"
                        id="sorcery"
                        class="cardType"
                    />
                </Container>
                <Container>
                    <Form.Label>Mana Color</Form.Label>
                    <Form.Check 
                        label="White"
                        name="white"
                        id="white"
                        class="color"
                    />
                    <Form.Check 
                        label="Blue"
                        name="black"
                        id="blue"
                        class="color"
                    />
                    <Form.Check 
                        label="Black"
                        name="black"
                        id="black"
                        class="color"
                    />
                    <Form.Check 
                        label="Red"
                        name="red"
                        id="red"
                        class="color"
                    />
                    <Form.Check 
                        label="Green"
                        name="green"
                        id="green"
                        class="color"
                    />
                </Container>
                <Button style={{ marginTop: "2%" }} type="submit">Search Cards</Button>
            </Form>
        </Container>
    )
}

export default CardSearchForm