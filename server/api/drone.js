const router = require('express').Router()
const arDrone = require('ar-drone')
const parrot = require('node-parrot-drone')
const drone = new parrot.Wifi
const client = arDrone.createClient()
client.createRepl()

const connected = () => {
    console.log('connected')
}
drone.on('connected', connected)
drone.on('message', (message) => console.log('this is the message', message))


router.get('/takeoff', (req,res,next) => {
    client.takeoff()
    res.json('taking off')
})

router.get('/land', (req,res,next) => {
    client.stop()
    client.land()
    res.json('landing')
})

router.get('/battery', (req,res,next) => {
    const batt = client.battery()
    console.log('battery', batt)
    res.json(client.battery())
})

router.get('/reset', (req,res,next) => {
    client.resume()
    res.json('resuming flight')
})

module.exports = router