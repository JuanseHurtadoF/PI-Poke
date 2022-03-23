import axios from 'axios'
export const FETCH_POKEMON = 'FETCH_POKEMON'
export const GET_POKEMON_INFO = 'GET_POKEMON INFO'
export const SEARCH_POKEMON = 'SEARCH_POKEMON'




export function fetchPokemon() {
    return function(dispatch) {
        axios.get('http://localhost:3001/api/pokemon')
            .then(pokemon => {
                dispatch({
                    type: FETCH_POKEMON,
                    payload: pokemon
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export function pokemonDetails(info) {
    return function(dispatch) {
                dispatch({
                    type: GET_POKEMON_INFO,
                    payload: info
                })
    }
}

export function searchPokemon(search) {
    return function(dispatch) {
        axios.get('http://localhost:3001/api/pokemon/name/' + search)
            .then(pokemon => {
                dispatch({
                    type: SEARCH_POKEMON,
                    payload: pokemon
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
}