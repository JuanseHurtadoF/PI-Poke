import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchPokemon} from '../store/actions'
import Pokemon from "./pokemon"
import PokemonInfo from "./pokemonInfo"
import { Link } from "react-router-dom"

export default function AllPokemon() {

    let pokemon = useSelector(state => state.currentPage)
    
    // let filteredPokemon = useSelector(state => state.filteredPokemon)
    // let currentPage = useSelector(state => state.currentPage)

    let dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchPokemon())
    }, [])

    return (
        <div className="body-container">
            <div className="first">
            </div>
            <div className="pokemon-container">
                {
                pokemon.map(pokemon => {
                    return <Pokemon id={pokemon.id} name={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} img={pokemon.img} key={pokemon.id} types={pokemon.types}/> 
                })}
            </div>
            <div className="pokemon-info">
                <PokemonInfo />
                <Link to="/pokedex/form" className="btn btn-create">Create Pokemon</Link>
        </div>
        </div>
    )
}