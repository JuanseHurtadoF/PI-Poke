import axios from "axios"
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import { pokemonDetails, resetPokemon } from "../store/actions";
import { Link } from "react-router-dom";

export default function SeparatePokemon() {

    let pokemon = useSelector(state => state.pokemonInfo)
    var types = pokemon.types?.map(type => {return (<span key={type.name}>{(type.name + ' ')}</span>)})

    const {id} = useParams()
    let dispatch = useDispatch()

    async function details(id) {
        await axios.get(`http://localhost:3001/api/pokemon/` + id)
            .then(response => {
                let pokemonInfo = response.data
                dispatch(pokemonDetails(pokemonInfo[0]))
            })
    }

    function handleClick() {
        dispatch(resetPokemon())
    }

    useEffect(() => {
        details(id);
    }, [])
    
    return (
        <div className="separate-background">
            <div className="pokemon-information-separate">
                <div className="pokemon-information-background-separate">
                    <img src={pokemon.img} className="pokemon-image-info hide-image"/>
                </div>
                
                <h1 className="pokemon-name">{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h1>
                <div className="stats-list-container">
                    <ul className="stats-list">
                    {!pokemon.attack && <li className="stats-list-item gray">Loading...</li>}
                        {pokemon.attack && <li className="stats-list-item">Attack: {pokemon.attack}</li>}
                        {pokemon.defense && <li className="stats-list-item">Defense: {pokemon.defense}</li>}
                        {pokemon.height && <li className="stats-list-item">Height: {pokemon.height}</li>}
                        {pokemon.hp && <li className="stats-list-item">HP: {pokemon.hp}</li>}
                        {pokemon.hp && <li className="stats-list-item stats-list-item-types">{types}</li>}
                        {pokemon.id && <li className="stats-list-item">ID: {typeof pokemon.id === 'string' ? pokemon.id.slice(0, 3) : pokemon.id }</li>}
                    </ul>
                </div>
                {pokemon.hp && <div className="back-orange-div"><Link to='/pokedex' className="back-orange" onClick={handleClick}>Go Back</Link></div>}
            </div>
        </div>


    )

}