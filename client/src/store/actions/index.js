import axios from 'axios'
export const FETCH_POKEMON = 'FETCH_POKEMON'
export const GET_POKEMON_INFO = 'GET_POKEMON INFO'
export const SEARCH_POKEMON = 'SEARCH_POKEMON'
export const ORDER_POKEMON = 'ORDER_POKEMON'




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

export function orderPokemon(toOrder, orderBy) {
    let orderedPokemon = toOrder

    // Order alphabetically A to Z
    if (orderBy === 'A to Z') {
        orderedPokemon = [...toOrder]

        orderedPokemon = orderedPokemon.sort( (a, b) => {
            if ( a.name < b.name ){
                return -1;
              }
              if ( a.name > b.name ){
                return 1;
              }
              return 0;
            }
        )
    }

    // Order alphabetically Z to A
    if (orderBy === 'Z to A') {
        orderedPokemon = [...toOrder]

        orderedPokemon = orderedPokemon.sort( (a, b) => {
            if ( a.name < b.name ){
                return 1;
              }
              if ( a.name > b.name ){
                return -1;
              }
              return 0;
            }
        )
    }

    // Only created by me
    if (orderBy === 'Created by me') {
        orderedPokemon = orderedPokemon.filter(pokemon => pokemon.created === true)
    }

    // Only from API
    if (orderBy === 'From PokeApi') {
        console.log(toOrder)
        orderedPokemon = orderedPokemon.filter(pokemon => pokemon.created !== true)
        console.log(orderedPokemon)
    }

    // Order by attack
    if (orderBy === 'By attack') {
        orderedPokemon = [...toOrder]
        console.log(orderedPokemon[0])

        orderedPokemon = orderedPokemon.sort( (a, b) => {
            if ( a.attack < b.attack ){
                return 1;
              }
              if ( a.attack > b.attack ){
                return -1;
              }
              return 0;
            }
        )
        console.log(orderedPokemon[0])
    }

    

    return {
        type: ORDER_POKEMON,
        payload: orderedPokemon
    }

}