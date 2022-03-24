import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchPokemon} from '../store/actions'
import Pokemon from "./pokemon"
import PokemonInfo from "./pokemonInfo"

export default function AllPokemon() {

    let pokemon = useSelector(state => state.filteredPokemon)

    
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPokemon())
    }, [])
    console.log(pokemon)
    
    return (
        <div className="body-container">
            <div className="form">

            </div>
            <div className="pokemon-container">
                {
                pokemon.map(pokemon => {
                    return <Pokemon id={pokemon.id} name={pokemon.name[0].toUpperCase() + pokemon.name.slice(1)} image={pokemon.img} key={pokemon.id} types={pokemon.types}/>
                })}
            </div>
            <div className="pokemon-info">
                <PokemonInfo />
            </div>
        </div>
        
    )
}