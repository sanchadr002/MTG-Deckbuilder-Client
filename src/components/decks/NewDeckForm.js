import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NewDeckForm = (props) => {

    const navigate = useNavigate()

    // Add onSubmit function to create an empty deck that the user will update with each card addition
    // function should also navigate user to the card search form
    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/cards/search')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Deck name</Form.Label>
            <Form.Control type="text" placeholder="Enter deck name"/>
            <Button type="submit">
                Next
            </Button>
        </Form>
    )
}

export default NewDeckForm