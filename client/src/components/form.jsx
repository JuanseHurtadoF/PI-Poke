import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Form() {

    const [form, setForm] = useState({
        name: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: []
    })


    let [message, setMessage] = useState('')


    function handleChange(event) {
        event.preventDefault()
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    // let typesArray = []
    async function handleCheckChange(event) {
        if (event.target.checked) {
            // typesArray.push(event.target.value)
            setForm({
                ...form,
                types: [...form.types, event.target.value]
            }) 
        } else {
            // let filteredTypes = [typesArray]
            setForm({
                ...form,
                types: [...form.types.filter(type => type !== event.target.value)]
            })
                
        }
    }
    console.log(form.types)

    async function handleSubmit(event) {
        if ((!form.name || !form.hp || !form.attack || !form.speed || !form.height || !form.weight) || form.types.length > 2  || form.types.length < 1) {
            event.preventDefault()
            setMessage('Did you leave a mandatory field empty or select more than two types?')
        } else if (false) {
            console.log('here')
        } else {
            // Creating Pokemon
            event.preventDefault()
            setMessage('Created successfully')
            const newPokemon = await axios.post("http://localhost:3002/api/pokemon", form)

            // Associating Pokemon with types
            const types = await axios.get('http://localhost:3002/api/type')

            let unknownType = types.data.filter(type => type.name === 'unknown')

            if (form.types.length <= 0) {
                setForm({
                    ...form,
                    types: [unknownType]
                })
            }

            for (let i = 0; i < 2; i++) {
                var currentType = types.data.filter(type => type.name === form.types[i])
                let typeId = currentType[0]?.id
                console.log(typeId)

                const assignType = await axios.post(`http://localhost:3002/api/type/${newPokemon.data.id}/type/${typeId}`)
            }
            
        }



    }



    return (
        <div className="form-background">
            <div className="space"></div>
            <div className="form-container">
                <h1 className="upload-title">Upload your Pokemon</h1>

                <form className="form" onSubmit={handleSubmit}>

                    <label className="form-label">Name:* </label>
                    <input value={form.name} name='name' type='text' placeholder="Name" className="form-input" onChange={handleChange}></input>
                    
                    <div className="form-stats-container">
                        <label className="form-label">HP:* </label>
                        <input value={form.hp} name='hp' type='number' placeholder="HP" className="form-input-stat" onChange={handleChange}></input>

                        <label className="form-label">Attack:* </label>
                        <input value={form.attack} name='attack' type='number' placeholder="Attack" className="form-input-stat" onChange={handleChange}></input>

                        <label className="form-label">Defense:* </label>
                        <input value={form.defense} name='defense' type='number' placeholder="Defense" className="form-input-stat" onChange={handleChange}></input>

                        <label className="form-label">Speed:* </label>
                        <input value={form.speed} name='speed' type='number' placeholder="Speed" className="form-input-stat" onChange={handleChange}></input>

                        <label className="form-label">Height:* </label>
                        <input value={form.height} name='height' type='number' placeholder="Height" className="form-input-stat" onChange={handleChange}></input>

                        <label className="form-label">Weight:* </label>
                        <input value={form.weight} name='weight' type='number' placeholder="Weight" className="form-input-stat" onChange={handleChange}></input>

                        <label className="form-label">Image: </label>
                        <input value={form.img} name='img' type='text' placeholder="Image" className="form-input-stat" onChange={handleChange}></input>
        
                    </div>
                    
                    <div className="space"></div>
                    <h3 className="choose-type">Choose a type:</h3>

                    <div className="checkbox-container">

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="normal" value="normal" onChange={handleCheckChange}/>
                            <label className="form-label-check">Normal</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="fighting" value="fighting" onChange={handleCheckChange}/>
                            <label className="form-label-check">Fighting</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="flying" value="flying" onChange={handleCheckChange}/>
                            <label className="form-label-check">Flying</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="poison" value="poison" onChange={handleCheckChange}/>
                            <label className="form-label-check">Poison</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="rock" value="rock" onChange={handleCheckChange}/>
                            <label className="form-label-check">Rock</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="bug" value="bug" onChange={handleCheckChange}/>
                            <label className="form-label-check">Bug</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="ghost" value="ghost" onChange={handleCheckChange}/>
                            <label className="form-label-check">Ghost</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="steel" value="steel" onChange={handleCheckChange}/>
                            <label className="form-label-check">Steel</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="fire" value="fire" onChange={handleCheckChange}/>
                            <label className="form-label-check">Fire</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="Water" value="Water" onChange={handleCheckChange}/>
                            <label className="form-label-check">Water</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="grass" value="grass" onChange={handleCheckChange}/>
                            <label className="form-label-check">Grass</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="electric" value="electric" onChange={handleCheckChange}/>
                            <label className="form-label-check">Electric</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="psychic" value="psychic" onChange={handleCheckChange}/>
                            <label className="form-label-check">Psychic</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="ice" value="ice" onChange={handleCheckChange}/>
                            <label className="form-label-check">Ice</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="dragon" value="dragon" onChange={handleCheckChange}/>
                            <label className="form-label-check">Dragon</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="ground" value="ground" onChange={handleCheckChange}/>
                            <label className="form-label-check">Ground</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="dark" value="dark" onChange={handleCheckChange}/>
                            <label className="form-label-check">Dark</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="fairy" value="fairy" onChange={handleCheckChange}/>
                            <label className="form-label-check">Fairy</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="unknown" value="unknown" onChange={handleCheckChange}/>
                            <label className="form-label-check">Unknown</label>
                        </div>

                        <div className="type-check">
                            <input className='input-check' type="checkbox" name="shadow" value="shadow" onChange={handleCheckChange}/>
                            <label className="form-label-check">Shadow</label>
                        </div>
                    </div>


                    <button className='submit'>Submit</button>
                    <p className="message">{message}</p>
                </form>
            </div>
            <Link to='/pokedex' className="back">Go Back</Link>
        </div>
    )
}