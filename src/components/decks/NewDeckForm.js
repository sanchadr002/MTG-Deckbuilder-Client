import React from 'react'
import { Form, Button } from 'react-bootstrap'

const NewDeckForm = (props) => {
    // Add onSubmit function to create an empty deck that the user will update with each card addition
    
    return (
        <Form>
            <Form.Label>Deck name</Form.Label>
            <Form.Control type="text" placeholder="Enter deck name"/>
            <Button type="submit">
                Next
            </Button>
        </Form>
    )
}

export default NewDeckForm