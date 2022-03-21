const { Router, response } = require('express');
const { restart } = require('nodemon');
const pokemonRoute = require('./pokemon.js')
const typeRoute = require('./type.js')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/pokemon', pokemonRoute)
router.use('/type', typeRoute)



module.exports = router;




// Lo que hice antes

// // Initialize variable to store pokemon received from API)
// var allPokemon
// var pokemonArray

// // Get all data from API and store it in allPokemon.
// downloadFromAPI()

// async function downloadFromAPI() {
//     const apiData = await axios.get("http://pokeapi.co/api/v2/pokemon")
//     results = apiData.data.results



//     var createPokemon = []
//     var setLimit = 5

//     for (let i = 0; i < setLimit; i++) {
//         var pokemonDetail = await axios.get(`http://pokeapi.co/api/v2/pokemon/${results[i].name}`)
//         var pokemonStats = pokemonDetail.data

//         var pokemon = {
//             name: results[i].name,
//             HP: pokemonStats.stats[0].base_stat,
//             attack: pokemonStats.stats[1].base_stat,
//             defense: pokemonStats.stats[2].base_stat,
//             speed: pokemonStats.stats[5].base_stat,
//             weight: pokemonStats.weight,
//             height: pokemonStats.height,
//         }
//         createPokemon.push(pokemon)
//     }

    

//     return createPokemon
// }


// router.get('/', function (req, res, next) {
    //     res.send("Soy get en / pokemon")
    
    //     // const allPokemon = await downloadFromAPI()
    //     // res.status(200).send(allPokemon)
    // })