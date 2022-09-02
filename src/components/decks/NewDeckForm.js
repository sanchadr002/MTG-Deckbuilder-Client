import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { createDeck } from '../../api/deck'

const dummyDeck = {
    name: 'test',
    cards: []
}

const NewDeckForm = (props) => {
    const {user} = props
    const navigate = useNavigate()

    // Add onSubmit function to create an empty deck that the user will update with each card addition
    // function should also navigate user to the card search form
    const handleSubmit = (e) => {
        e.preventDefault()
        createDeck(user, dummyDeck)
        navigate('/cards/search')
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Deck name</Form.Label>
                <Form.Control type="text" placeholder="Enter deck name"/>
                <Button type="submit">
                    Next
                </Button>
            </Form>
        </Container>
    )
}

export default NewDeckForm