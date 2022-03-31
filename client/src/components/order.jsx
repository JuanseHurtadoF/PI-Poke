import { useSelector, useDispatch } from "react-redux"
import { orderPokemon } from "../store/actions"

export default function Order() {


    let toFilter = useSelector(state => state.pokemon)
    let toOrder = useSelector(state => state.filteredPokemon)

    let dispatch = useDispatch()

    function handleChangeFilter(event) {
        event.preventDefault()
            let orderBy = event.target.value
            var selectElement = document.getElementById('selectOrder')
            selectElement.selectedIndex = 0
            dispatch(orderPokemon(toFilter, orderBy))
    }

    function handleChangeOrder(event) {
        event.preventDefault()
            let orderBy = event.target.value
            dispatch(orderPokemon(toOrder, orderBy))
    }

    return (
        <div className="select-container">
            <select onChange={handleChangeFilter} className="filter">
                <option value='defaultFilter'> -- Choose a Filter -- </option>
                <option value='Created by me'>Created by me</option>
                <option value='From PokeApi'>From PokeApi</option>
                <option value='Normal'>Normal</option>
                <option value='Rock'>Rock</option>
                <option value='Fire'>Fire</option>
                <option value='Psychic'>Psychic</option>
                <option value='Dark'>Dark</option>
                <option value='Fighting'>Fighting</option>
                <option value='Bug'>Bug</option>
                <option value='Water'>Water</option>
                <option value='Ice'>Ice</option>
                <option value='Fairy'>Fairy</option>
                <option value='Flying'>Flying</option>
                <option value='Ghost'>Ghost</option>
                <option value='Grass'>Grass</option>
                <option value='Dragon'>Dragon</option>
                <option value='Unknown'>Unknown</option>
                <option value='Poison'>Poison</option>
                <option value='Steel'>Steel</option>
                <option value='Electric'>Electric</option>
                <option value='Ground'>Ground</option>
                <option value='Shadow'>Shadow</option>
            </select>
            <select onChange={handleChangeOrder} className="order" id="selectOrder" >
                <option value='defaultOrder'> -- Order by --</option>
                <option value='A to Z'>A to Z</option>
                <option value='Z to A'>Z to A</option>
                <option value='By attack'>By attack</option>
            </select>
        </div>
    )
}
    