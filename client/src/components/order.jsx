import { useSelector, useDispatch } from "react-redux"
import { orderPokemon } from "../store/actions"

export default function Order() {
    
    let toOrder = useSelector(state => state.pokemon)

    let dispatch = useDispatch()

    function handleChange(event) {
        let orderBy = event.target.value
        dispatch(orderPokemon(toOrder, orderBy))
    }
    
    return (
        <select onChange={handleChange}>
            <option value='default'> -- </option>
            <option value='A to Z'>A to Z</option>
            <option value='Z to A'>Z to A</option>
            <option value='By attack'>By attack</option>
            <option value='Created by me'>Created by me</option>
            <option value='From PokeApi'>From PokeApi</option>
            <option value='Only Poison'>Only Poison</option>
        </select>
    )
}
    