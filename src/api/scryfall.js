// install dependencies
import axios from 'axios'

// declare the scryfall API url
const scryfallURL = 'https://api.scryfall.com/search?q='

export const scryfallSearch = (searchParams) => {
    return axios(`${scryfallURL}${searchParams}`)
}

export const randomCard = () => {
    let cardsArr = []
    axios('https://api.scryfall.com/cards/random')
        .then(card => cardsArr.push(card))
        .catch(console.error)
    axios('https://api.scryfall.com/cards/random')
        .then(card => cardsArr.push(card))
        .catch(console.error)
    axios('https://api.scryfall.com/cards/random')
        .then(card => cardsArr.push(card))
        .catch(console.error)
    if (cardsArr.length === 3){
        return cardsArr
    }
}