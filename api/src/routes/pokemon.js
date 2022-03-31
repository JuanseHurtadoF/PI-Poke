const axios = require('axios');
const { Router } = require('express');
const { Pokemon } = require('../db')
const { Type } = require('../db')
const router = Router();
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get('/', async function (req, res, next) {

    // Get pokemon from PokeAPI
    let response = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=40&limit=40")
    // Save results from API on PokemonApi
    let pokemonApi = response.data.results


    // Get pokemon that have been stored in the DB
    let pokemonDb = Pokemon.findAll({
        // Complex types object to types: [{name: 'fire'}, {name: 'poison'}]
        include: [{
            model: Type,
            as: 'types',
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }],
        through: ['name'],
        attributes: ['id', 'name', 'hp', 'attack', 'defense', 'speed', 'weight', 'height', 'img', 'created']
    })

    // Save all data needed into an array of objects
    Promise.all([pokemonApi, pokemonDb])
        .then(async response => {
            const [pokemonApi, pokemonDb] = response

            allPokemonApi = []
            setLimit = 40

            for (let i = 0; i < setLimit; i++) {

                const urlRequest = await axios.get(pokemonApi[i].url)
                types = urlRequest.data.types.map(poke => {return {name: poke.type.name}})

                var obj = {
                        id: urlRequest.data.id,
                        name: urlRequest.data.name,
                        // hp: urlRequest.data.stats[0].base_stat,
                        attack: urlRequest.data.stats[1].base_stat,
                        // defense: urlRequest.data.stats[2].base_stat,
                        // speed: urlRequest.data.stats[5].base_stat,
                        // weight: urlRequest.data.weight,
                        // height: urlRequest.data.height,
                        types: types,
                        img: urlRequest.data.sprites.front_default
                    }

                allPokemonApi.push(obj)
            }

            const fromApiAndDb = [...pokemonDb,...allPokemonApi]

            return res.send(fromApiAndDb)
        })
})

router.get('/name/:name', async (req, res, next) => {

    const name = req.params.name

    let foundInDb = await Pokemon.findAll({
        include: Type,
        where: {
            name: name
        }
    })

    try {
        let apiResponse = await axios.get("http://pokeapi.co/api/v2/pokemon/" + name)
  
            types = apiResponse.data.types.map(poke => {return {name: poke.type.name}})
            var obj = {
                name: name,
                hp: apiResponse.data.stats[0].base_stat,
                attack: apiResponse.data.stats[1].base_stat,
                defense: apiResponse.data.stats[2].base_stat,
                speed: apiResponse.data.stats[5].base_stat,
                weight: apiResponse.data.weight,
                height: apiResponse.data.height,
                types: types,
                img: apiResponse.data.sprites.front_default,
                id: apiResponse.data.id
            }
    } catch(error) {
        console.log(error)
    }

    

    let foundInApi = [obj]

    let allFound = [...foundInDb, ...foundInApi]

    let filteredAllFound = allFound.filter(item => item)

    if (allFound.length < 1) return res.send('No pokemon found')

    res.send(filteredAllFound)
})

router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        let foundPokemon
    
        if(typeof id === 'string' && id.length > 8) {
            finding = await Pokemon.findByPk(id, {
                include: [{
                    model: Type,
                    as: 'types',
                    attributes: ['name'],
                    through: {
                        attributes: [],
                    }
                }],
                through: ['name'],
                attributes: ['id', 'name', 'hp', 'attack', 'defense', 'speed', 'weight', 'height', 'img', 'created']
            })
            foundPokemon = [finding]
            return res.send(foundPokemon)
        } else {

            let response = await axios.get('http://pokeapi.co/api/v2/pokemon/' + id)

            types = response.data.types.map(poke => {return {name: poke.type.name}})

            var obj = {
                name: response.data.name,
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                speed: response.data.stats[5].base_stat,
                weight: response.data.weight,
                height: response.data.height,
                img: response.data.sprites.front_default,
                id: response.data.id,
                types: types
            }

            foundPokemon = [obj]
            return res.send(foundPokemon)
        }
        
    } catch(error) {
        next(error)
    }

})

router.post('/', async function (req, res, next) {
    try {
        const {name, hp, attack, defense, speed, height, weight, img} = req.body
        const newPokemon = await Pokemon.create({
            name: name.toLowerCase(), 
            hp,
            attack,
            defense, 
            speed,
            height,
            weight,
            img
        })
        return res.send(newPokemon)
    } catch(error) {
        next(error)
    }
})


module.exports = router;



