import { useState } from "react"
import { searchPokemon } from "../store/actions"
import { useDispatch } from "react-redux"
import { fetchPokemon } from "../store/actions"

export default function SearchBar (props) {
    let [search, setSearch] = useState(' ')

    let dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault()
        // axios.get(search)
        dispatch(searchPokemon(search.toLowerCase()))
        
    }

    function handleChange(event) {
        event.preventDefault()
        setSearch(event.target.value)

        if(event.target.value === '') {
            dispatch(fetchPokemon())
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="search-bar" placeholder="Search Pokemon..." onChange={handleChange}></input>
        </form>
        
    )
    
}