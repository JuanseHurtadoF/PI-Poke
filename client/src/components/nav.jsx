import React from "react";
import logo from '../img/pokemon-logo.png'
import Order from "./order";
import SearchBar from "./searchBar";

export default function Nav(props) {
    return (
    <div className="navbar-container">
        <div className="navbar-items">
            <img src={logo} alt="Pokemon Logo" className="logo"/>
            <SearchBar />
            <div className="filters">
                    <svg xmlns="http://www.w3.org/2000/svg" className="filter-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <Order />
            </div>
        </div>
    </div>
    )
}