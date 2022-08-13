// install dependencies
import axios from 'axios'

// declare the scryfall API url
const scryfallURL = 'https://api.scryfall.com/cards/search?q='

export const scryfallSearch = (searchParams) => {

    // const config = {
    //     method: "get",
    //     url: `${scryfallURL}f%3Astandard%2B${searchParams}`
    // }

    // return axios(config)
    return fetch(`${scryfallURL}f%3Astandard%20and%20${searchParams}`)
}

export const randomCard = () => {
    return axios('https://api.scryfall.com/cards/random')
}