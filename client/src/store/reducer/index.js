import { FETCH_POKEMON, SEARCH_POKEMON } from "../actions";
import { GET_POKEMON_INFO } from "../actions";
import { ORDER_POKEMON } from "../actions";

const initialState = {
    pokemon: [],
    filteredPokemon: [],
    pokemonInfo: {
        name: 'Charmander',
        attack: 52,
        defense: 43,
        height: 6,
        hp: 39,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        name: "charmander",
        speed: 65,
        types: ['fire']
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_POKEMON:
            return {
                ...state,
                pokemon: action.payload.data,
                filteredPokemon: action.payload.data
            }
        case GET_POKEMON_INFO:
            return {
                ...state, 
                pokemonInfo: action.payload
            }
        case SEARCH_POKEMON:
            return {
                ...state,
                filteredPokemon: action.payload.data
            }
        case ORDER_POKEMON:
            return {
                ...state,
                filteredPokemon: action.payload,
            }
        default: 
            return state
    }
}