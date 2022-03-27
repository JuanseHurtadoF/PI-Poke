import React from "react";

import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Pokedex from "./components/pokedex";
import Landing from "./components/landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route path='/pokedex' element={<Pokedex />} />
      </Routes>
    </div>
  );
}

export default App;
