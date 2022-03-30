import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { orderPokemon } from "../store/actions"

export default function Order() {

    
    let toFilter = useSelector(state => state.pokemon)
    let toOrder = useSelector(state => state.filteredPokemon)

    let dispatch = useDispatch()

    function handleChangeFilter(event) {
        let orderBy = event.target.value
        console.log(orderBy)
        dispatch(orderPokemon(toFilter, orderBy))

    }

    function handleChangeOrder(event) {
        let orderBy = event.target.value
        dispatch(orderPokemon(toOrder, orderBy))
    }

    return (
        <div className="select-container">
            <select onChange={handleChangeFilter} className="filter">
                <option value='default' selected> -- Choose a Filter -- </option>
                <option value='Created by me'>Created by me</option>
                <option value='From PokeApi'>From PokeApi</option>
                <option value='Only Normal'>Only Normal</option>
                <option value='Only Rock'>Only Rock</option>
                <option value='Only Fire'>Only Fire</option>
                <option value='Only Psychic'>Only Psychic</option>
                <option value='Only Dark'>Only Dark</option>
                <option value='Only Fighting'>Only Fighting</option>
                <option value='Only Bug'>Only Bug</option>
                <option value='Only Water'>Only Water</option>
                <option value='Only Ice'>Only Ice</option>
                <option value='Only Fairy'>Only Fairy</option>
                <option value='Only Flying'>Only Flying</option>
                <option value='Only Ghost'>Only Ghost</option>
                <option value='Only Grass'>Only Grass</option>
                <option value='Only Dragon'>Only Dragon</option>
                <option value='Only Unknown'>Only Unknown</option>
                <option value='Only Poison'>Only Poison</option>
                <option value='Only Steel'>Only Steel</option>
                <option value='Only Electric'>Only Electric</option>
                <option value='Only Ground'>Only Ground</option>
                <option value='Only Shadow'>Only Shadow</option>
            </select>
            <select onChange={handleChangeOrder} className="order">
                <option value='default'> -- Order by --</option>
                <option value='A to Z'>A to Z</option>
                <option value='Z to A'>Z to A</option>
                <option value='By attack'>By attack</option>
            </select>
        </div>
    )
}
    