import React from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function PokemonInfo() {

    let pokemonInfo = useSelector(state => state.pokemonInfo)

    var types = pokemonInfo.types?.map(type => {return (<span key={type.name}>{(type.name + ' ')}</span>)})
    
    return (
        <div className="pokemon-information" key={pokemonInfo.id}>
            <div className="pokemon-information-background">
                <img src={pokemonInfo.img} className="pokemon-image-info hide-image"/>
            </div>
            
            <h1 className="pokemon-name">{pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1)}</h1>
            <div className="stats-list-container">
                <ul className="stats-list">
                    {!pokemonInfo.attack && <li className="stats-list-item gray">Choose a Pokemon to view details</li>}
                    {pokemonInfo.attack && <li className="stats-list-item">Attack: {pokemonInfo.attack}</li>}
                    {pokemonInfo.defense && <li className="stats-list-item">Defense: {pokemonInfo.defense}</li>}
                    {pokemonInfo.height && <li className="stats-list-item">Height: {pokemonInfo.height}</li>}
                    {pokemonInfo.hp && <li className="stats-list-item">HP: {pokemonInfo.hp}</li>}
                    {pokemonInfo.hp && <li className="stats-list-item stats-list-item-types">{types}</li>}
                    {pokemonInfo.id && <li className="stats-list-item">ID: {typeof pokemonInfo.id === 'string' ? pokemonInfo.id.slice(0, 3) : pokemonInfo.id }</li>}
                </ul>
            </div>
            {pokemonInfo.id && <div className="separate-page-div"><Link to={`/pokedex/${pokemonInfo.id}`} className="separate">View on separate page</Link></div>}
            
        </div>
    ) 
}


