// install dependencies
import axios from 'axios'

// declare the scryfall API url
const scryfallURL = 'https://api.scryfall.com/search?q='

export const scryfallSearch = (searchParams) => {
    return axios(`${scryfallURL}${searchParams}`)
}