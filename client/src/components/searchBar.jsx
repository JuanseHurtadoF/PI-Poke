import { useState } from "react"
import { searchPokemon } from "../store/actions"
import { useDispatch, useSelector } from "react-redux"
import { resetPokemon } from "../store/actions"
import { attackOrder } from "../store/actions"

export default function SearchBar (props) {
    let [search, setSearch] = useState(' ')

    let dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault()
        // axios.get(search)
        // dispatch(searchPokemon(search.toLowerCase()))


        dispatch(searchPokemon(search))
    }

    function handleChange(event) {
        event.preventDefault()
        setSearch(event.target.value)

        if(event.target.value === '') {
            dispatch(resetPokemon())
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="search-bar" placeholder="Search Pokemon..." onChange={handleChange}></input>
        </form>
        
    )
    
}