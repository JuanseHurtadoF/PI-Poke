const { Router } = require('express');
const router = Router();
const {Type} = require('../db')
const {Pokemon} = require('../db')
const axios = require('axios');

router.get('/types', async function (req, res, next) {
    const getTypes = await axios.get('https://pokeapi.co/api/v2/type')

    const types = getTypes.data.results

    const typesArray = types.map(type => type.name)

        for (let i = 0; i< typesArray.length; i++) {
            Type.create({name: typesArray[i]})
        }
    
    res.send(typesArray)
})

router.get('/', async function (req, res, next) {
    try {
        const types = await Type.findAll()
        return res.send(types)
    } catch(error) {
        next(error)
    }
})

router.post('/', async function (req, res, next) {
        const {name} = req.body
        return Type.create({name})
            .then(newType => {
                newType
                return res.status(201).send(newType)
        }).catch(error => next(error))
})

router.post('/:pokemonId/type/:typeId', async (req, res, next) => {
    try {
        const {pokemonId, typeId} = req.params
        const pokemon = await Pokemon.findByPk(pokemonId)
        await pokemon.addType(typeId)
        return res.send(200)
    } catch(error) {
        next(error)
    }
})

module.exports = router;
