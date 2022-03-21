const axios = require('axios');
const { Router, response } = require('express');
const { Pokemon } = require('../db')
const { Type } = require('../db')
const router = Router();

router.get('/', async function (req, res, next) {

    // Get pokemon from PokeAPI
    let response = await axios.get("http://pokeapi.co/api/v2/pokemon")

    // Save results from API on PokemonApi
    let pokemonApi = response.data.results

    // Get pokemon that have been stored in the DB
    let pokemonDb = Pokemon.findAll({
        include: Type
    })

    // Save all data needed into an array of objects
    Promise.all([pokemonApi, pokemonDb])
        .then(async response => {
            const [pokemonApi, pokemonDb] = response

            allPokemonApi = []
            setLimit = 12

            for (let i = 0; i < setLimit; i++) {
                const urlRequest = await axios.get(pokemonApi[i].url)

                types = urlRequest.data.types.map(poke => {return poke.type.name})
                
                
                var obj = {
                        name: pokemonApi[i].name,
                        HP: urlRequest.data.stats[0].base_stat,
                        attack: urlRequest.data.stats[1].base_stat,
                        defense: urlRequest.data.stats[2].base_stat,
                        speed: urlRequest.data.stats[5].base_stat,
                        weight: urlRequest.data.weight,
                        height: urlRequest.data.height,
                        types: types,
                        img: urlRequest.data.sprites.front_default
                    }

                allPokemonApi.push(obj)
            }

            const fromApiAndDb = [...allPokemonApi, ...pokemonDb]

            res.send(fromApiAndDb)
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
        types = apiResponse.data.types.map(poke => {return poke.type.name})
    
            var obj = {
                name: name,
                hp: apiResponse.data.stats[0].base_stat,
                attack: apiResponse.data.stats[1].base_stat,
                defense: apiResponse.data.stats[2].base_stat,
                speed: apiResponse.data.stats[5].base_stat,
                weight: apiResponse.data.weight,
                height: apiResponse.data.height,
                types: types,
                img: apiResponse.data.sprites.front_default
            }
    } catch(error) {
        
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
            foundPokemon = await Pokemon.findByPk(id)
            res.send(foundPokemon)
        } else {

            let response = await axios.get('http://pokeapi.co/api/v2/pokemon/' + id)

            var obj = {
                name: response.data.name,
                HP: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                speed: response.data.stats[5].base_stat,
                weight: response.data.weight,
                height: response.data.height,
                img: response.data.sprites.front_default
            }

            foundPokemon = obj
            res.send(foundPokemon)
        }
        
    } catch(error) {
        next(error)
    }

})

router.post('/', async function (req, res, next) {
    try {
        const {name, hp, attack, defense, speed, height, weight } = req.body
        const newPokemon = await Pokemon.create({
            name, 
            hp, 
            attack,
            defense, 
            speed,
            height,
            weight
        })
        res.send(newPokemon)
    } catch(error) {
        next(error)
    }
    

})

router.put('/', function (req, res, next) {
    res.send("Soy put en / pokemon")
})

router.delete('/', function (req, res, next) {
    res.send("Soy delete en / pokemon")
})

module.exports = router;



// just in case 

// const axios = require('axios');
// const { Router, response } = require('express');
// const { Pokemon } = require('../db')
// const { Type } = require('../db')
// const router = Router();

// router.get('/', async function (req, res, next) {
//     let pokemonApi = await axios.get("http://pokeapi.co/api/v2/pokemon")
//     let pokemonDb = Pokemon.findAll({
//         include: Type
//     })
    
//     Promise.all([pokemonApi, pokemonDb])
//         .then(response => {
//             const [pokemonApi, pokemonDb] = response
//             console.log(pokemonApi.data.results)
//             console.log(pokemonDb)
//             res.send('All data printed to console')
//         })
// })

// // router.get('/', async function (req, res, next) {
// //     return await Pokemon.findAll(
// //         {include: Type}
// //     )
// //         .then(poke => {
// //             res.send(poke)
// //         }).catch(error => {
// //             next(error)
// //         })

// //     // const allPokemon = await downloadFromAPI()
// //     // res.status(200).send(allPokemon)
// // })




// router.post('/', async function (req, res, next) {
//     try {
//         const {name, hp, attack, defense, speed, height, weight } = req.body
//         const newPokemon = await Pokemon.create({
//             name, 
//             hp, 
//             attack,
//             defense, 
//             speed,
//             height,
//             weight
//         })
//         res.send(newPokemon)
//     } catch(error) {
//         next(error)
//     }
    

// })

// router.put('/', function (req, res, next) {
//     res.send("Soy put en / pokemon")
// })

// router.delete('/', function (req, res, next) {
//     res.send("Soy delete en / pokemon")
// })

// module.exports = router;
