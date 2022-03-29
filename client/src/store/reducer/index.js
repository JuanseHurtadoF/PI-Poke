import { CHANGE_PAGE, FETCH_POKEMON, SEARCH_POKEMON } from "../actions";
import { GET_POKEMON_INFO } from "../actions";
import { ORDER_POKEMON } from "../actions";

const initialState = {
    pokemon: [],
    filteredPokemon: [],
    currentPage: [], // Will only have 12 pokemon from filteredPokemon
    pokemonInfo: {
        attack: 45,
        defense: 35,
        height: 8,
        hp: 40,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
        name: "zubat",
        speed: 65,
        types: [{name: 'poison'}, {name: 'flying'}]
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_POKEMON:
            return {
                ...state,
                pokemon: action.payload.data,
                filteredPokemon: action.payload.data,
                currentPage: action.payload.data.slice(0, 12)
            }
        case GET_POKEMON_INFO:
            return {
                ...state, 
                pokemonInfo: action.payload
            }
        case SEARCH_POKEMON:
            return {
                ...state,
                filteredPokemon: action.payload.data,
                currentPage: action.payload.data
            }
        case ORDER_POKEMON:
            return {
                ...state,
                filteredPokemon: action.payload,
                currentPage: action.payload.slice(0, 12)
            }
        case CHANGE_PAGE:
            return {
                ...state,
                filteredPokemon: action.payload.filteredPokemon,
                currentPage: action.payload.filteredPokemon.slice((action.payload.page - 1) * 12, (action.payload.page * 12))
            }
        default: 
            return state
    }
}