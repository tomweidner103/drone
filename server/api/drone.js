const router = require('express').Router()
const arDrone = require('ar-drone')
const client = arDrone.createClient()
client.createRepl()

router.get('/takeoff', (req,res,next) => {
    res.json(client.takeoff())
})

router.get('/land', (req,res,next) => {
    res.json(client.land())
})

router.get('/battery', (req,res,next) => {
    res.json(client.battery())
})

module.exports = router