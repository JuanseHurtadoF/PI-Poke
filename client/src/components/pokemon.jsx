import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { pokemonDetails } from "../store/actions"

var pokemonInfo

export default function Pokemon(props) {
    let key = 1
    var types = props.types.map(type => {return (<span key = {key++}>{(type[0].toUpperCase() + type.slice(1)) + ' '}</span>)})
    
    let dispatch = useDispatch()


    async function handleClick(event) {
        event.preventDefault()
        const info = await axios.get('http://localhost:3001/api/pokemon/name/' + props.name.toLowerCase())
            .then(response => {
                pokemonInfo = response.data
                console.log(pokemonInfo[0])
                dispatch(pokemonDetails(pokemonInfo[0]))
            })
        
            
    }

    return (
        <div className="pokemon-card" draggable='true' onClick={handleClick}>
            <div className="image-background">
                <img src={props.image} className="pokemon-image"></img>
            </div>
            <div className="pokemon-name-type">
                <h2 className="pokemon-name">{props.name}</h2>
                <div className="pokemon-types">
                    {
                        types
                    }
                </div>
            </div>
        </div>
    )
}


