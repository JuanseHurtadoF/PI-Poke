import logo from '../img/pokemon-logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Landing() {

    axios.get('http://localhost:3002/api/type/types')

    return (
    <div className='landing'>
    <header className='header-landing'>
        <nav className="container-landing container-logo-landing">
            <img src={logo} alt="pokemon logo" className="logo-landing" />
        </nav>

        <div className="header-container-landing">
            <div className="header-container-inner-landing">
                <h1>A modern day PokeDex</h1>
                <p>Keep track of every Pokemon you see. Check their strength, height, speed and lots more. Good luck catching them all!</p>
                <Link to="/pokedex" className="btn">Open Pokedex</Link>
            </div>
        </div>
    </header>

    <section className='section-landing-container'>
        <div className="section-landing">
            <h2>A project by Juanse</h2>
            <p>As my final project on SoyHenry, a full stack developer bootcamp, I was tasked to develop a fully functioning Pokedex from scratch. I used Express JS to create a REST API, and Sequelize for data management. The user interface is built with React JS and CSS. 
            </p>
                
            <p>This was my very first project as a developer! If you have any tips, feel free to contact me at juansebastianhurtadof@gmail.com.</p>
        </div>
    </section>
    </div>
    )
}