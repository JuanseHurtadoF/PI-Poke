import axios from 'axios'
export const FETCH_POKEMON = 'FETCH_POKEMON'
export const GET_POKEMON_INFO = 'GET_POKEMON INFO'
export const SEARCH_POKEMON = 'SEARCH_POKEMON'
export const ORDER_POKEMON = 'ORDER_POKEMON'
export const CHANGE_PAGE = 'CHANGE_PAGE'



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

export function changePage(page, filteredPokemon) {
    console.log('got here')
    return function(dispatch) {
    dispatch({
        type: CHANGE_PAGE, 
        payload: {
            page,
            filteredPokemon   
        }
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
        orderedPokemon = orderedPokemon.filter(pokemon => pokemon.created !== true)
    }

    // Order by attack
    if (orderBy === 'By attack') {
        orderedPokemon = [...toOrder]

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
    }

    return {
        type: ORDER_POKEMON,
        payload: orderedPokemon
    }

}

