import React from "react";

import './App.css';
import { Route, Routes } from "react-router-dom";
import Pokedex from "./components/pokedex";
import Landing from "./components/landing";
import Form from "./components/form";
import PokemonInfo from "./components/pokemonInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/pokedex/form' element={<Form />} />
        <Route path='/pokedex/details' element={<PokemonInfo />} />
      </Routes>
    </div>
  );
}

export default App;
