import { useState } from "react"
import { useSelector, useDispatch} from "react-redux"
import { changePage } from "../store/actions"


export default function Pagination() {

    const [currentValue, setCurrentValue] = useState(1)

    let filteredPokemon = useSelector(state => state.filteredPokemon)
    let currentPage = useSelector(state => state.currentPage)

    console.log(currentPage)
    
    let pages = Math.ceil(filteredPokemon.length / 12)
    console.log(filteredPokemon.length)

    
    var numberOfPages = [] 

    for (let i = 1; i <= pages; i++) {
        numberOfPages.push(i)
    }

    let dispatch = useDispatch()

    function handleClick(event) {
        event.preventDefault()
        setCurrentValue(event.target.value)
        dispatch(changePage(event.target.value, filteredPokemon))
    }

    function handleLeftClick(event) {
        event.preventDefault()
        setCurrentValue(currentValue - 1)
        dispatch(changePage(currentValue - 1, filteredPokemon))
    }

    function handleRightClick(event) {
        event.preventDefault()
        setCurrentValue(currentValue + 1)
        dispatch(changePage(currentValue + 1, filteredPokemon))
    }


    let value = 0
    let buttons = numberOfPages.map(page => {
        value++
        return (<button key={value} value={value} className="number" onClick={handleClick}>{page}</button>)
    })

    let arrowLeft = currentValue > 1 ? (
        <button className="arrow arrow-left" onClick={handleLeftClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
        </button>
    ) : 
    <button className="hidden">
    <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
    </button>

    let arrowRight = currentValue >= numberOfPages.length ? 
        <button className="hidden">
            <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </button> : (
        <button className="arrow arrow-right" onClick={handleRightClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    )
    
    
    return (
        <div className="pagination">
        {arrowLeft}
        {buttons}
        {arrowRight}
    </div>
    )
}