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

    // 
    Promise.all([pokemonApi, pokemonDb])
        .then(async response => {
            const [pokemonApi, pokemonDb] = response

            allPokemonApi = []
            setLimit = 5

            for (let i = 0; i < setLimit; i++) {
                const urlRequest = await axios.get(pokemonApi[i].url)

                console.log(urlRequest.data.types)
                types = urlRequest.data.types.map(poke => {return poke.type.name})
                console.log(types)
                
                
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

// router.get('/', async function (req, res, next) {
//     return await Pokemon.findAll(
//         {include: Type}
//     )
//         .then(poke => {
//             res.send(poke)
//         }).catch(error => {
//             next(error)
//         })

//     // const allPokemon = await downloadFromAPI()
//     // res.status(200).send(allPokemon)
// })




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
