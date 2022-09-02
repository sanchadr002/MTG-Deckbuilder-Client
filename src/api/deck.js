import apiUrl from "../apiConfig"
import axios from "axios"

export const searchDecks = (user) => {
    
    const config = {
        method: 'GET',
        url: `${apiUrl}/decks`,
        data: {user: user._id}
    }

    return axios(config)
}

export const createDeck = (newDeck) => {
    return axios({
        url: `${apiUrl}/decks`,
        method: 'POST',
        data: { deck: newDeck}
    })
}