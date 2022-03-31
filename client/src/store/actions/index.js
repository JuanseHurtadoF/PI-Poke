import axios from 'axios'
export const FETCH_POKEMON = 'FETCH_POKEMON'
export const GET_POKEMON_INFO = 'GET_POKEMON INFO'
export const SEARCH_POKEMON = 'SEARCH_POKEMON'
export const ORDER_POKEMON = 'ORDER_POKEMON'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const RESET_POKEMON ='RESET_POKEMON'



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

export function resetPokemon() {
    return function(dispatch) {
        dispatch({
            type: RESET_POKEMON,
            payload: ''
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

    // Order by type
    if (orderBy === 'Poison') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'poison')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'poison')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Normal') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'normal')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'normal')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Rock') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'rock')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'rock')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Fire') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'fire')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'fire')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Psychic') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'psychic')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'psychic')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Dark') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'dark')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'dark')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Fighting') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'fighting')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'fighting')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Bug') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'bug')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'bug')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Water') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'water')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'water')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Ice') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'ice')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'ice')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Fairy') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'fairy')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'fairy')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Flying') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'flying')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'flying')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Ghost') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'ghost')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'ghost')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Grass') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'grass')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'grass')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Dragon') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'dragon')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'dragon')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Unknown') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'unknown')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'unknown')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Steel') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'steel')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'steel')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Electric') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'electric')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'electric')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Ground') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'ground')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'ground')
        orderedPokemon = [...firstType, ...secondType]
    }
    if (orderBy === 'Shadow') {   
        let firstType = toOrder.filter(pokemon => pokemon.types[0].name === 'shadow')
        let secondType = toOrder.filter(pokemon => pokemon.types[1]?.name === 'shadow')
        orderedPokemon = [...firstType, ...secondType]
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

