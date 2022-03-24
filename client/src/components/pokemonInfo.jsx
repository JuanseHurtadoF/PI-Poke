import React from "react";
import { useSelector } from "react-redux"

export default function PokemonInfo(props) {

    let pokemonInfo = useSelector(state => state.pokemonInfo)
    console.log(pokemonInfo)

    var types = pokemonInfo.types.map(type => {return (<span key={type}>{(type.toUpperCase() + ' ')}</span>)})

    // let dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(pokemonDetails(props.name))
    // }, [])

    
    return (
        <div className="pokemon-information" key={pokemonInfo.id}>
            <div className="pokemon-information-background">
                <img src={pokemonInfo.img} className="pokemon-image-info" alt="Pokemon front"/>
            </div>
            
            <h1 className="pokemon-name">{pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1)}</h1>
            <div className="stats-list-container">
                <ul className="stats-list">
                    <li className="stats-list-item">Attack: {pokemonInfo.attack}</li>
                    <li className="stats-list-item">Defense: {pokemonInfo.defense}</li>
                    <li className="stats-list-item">Height: {pokemonInfo.height}</li>
                    <li className="stats-list-item">HP: {pokemonInfo.hp}</li>
                    <li className="stats-list-item">{types}</li>
                </ul>
            </div>
        </div>


    )

}