import Nav from "./nav";
import AllPokemon from "./allPokemon";
import Pagination from "./pagination";

export default function Pokedex() {
    return (
        <div>
            <Nav />
            <AllPokemon />
            <Pagination />
        </div>
    )
}