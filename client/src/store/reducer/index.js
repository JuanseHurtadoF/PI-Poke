import { CHANGE_PAGE, FETCH_POKEMON, RESET_POKEMON, SEARCH_POKEMON } from "../actions";
import { GET_POKEMON_INFO } from "../actions";
import { ORDER_POKEMON } from "../actions";
import { ATTACK_ORDER } from "../actions";

const initialState = {
    pokemon: [],
    filteredPokemon: [],
    currentPage: [], // Will only have 12 pokemon from filteredPokemon
    pokemonInfo: {
        attack: '',
        defense: '',
        height: '',
        hp: '',
        img: "",
        name: "     ",
        speed: '',
        types: [{name: 'loading'}]
    },
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
                currentPage: action.payload.slice(0, 12),
            }
        // case ATTACK_ORDER: 
        //     let orderedPokemon = state.filteredPokemon.sort( (a, b) => {
        //     if ( a.attack < b.attack ){
        //         return -1;
        //       }
        //       if ( a.attack > b.attack ){
        //         return 1;
        //       }
        //       return 0;
        //     }
        // )
        
        // let attackOrder = orderedPokemon.filter(pokemon => pokemon.attack > 50)

        //     return {
        //         ...state, 
        //         filteredPokemon: attackOrder,
        //         currentPage: attackOrder.slice(0, 12),
        //     }
        case CHANGE_PAGE:
            return {
                ...state,
                filteredPokemon: action.payload.filteredPokemon,
                currentPage: action.payload.filteredPokemon.slice((action.payload.page - 1) * 12, (action.payload.page * 12))
            }
        case RESET_POKEMON:
            return {
                ...state,
                filteredPokemon: state.pokemon,
                currentPage: state.pokemon.slice(0, 12)
            }
        default: 
            return state
    }
}