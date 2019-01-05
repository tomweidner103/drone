const router = require('express').Router()
const arDrone = require('ar-drone')
const client = arDrone.createClient()
client.createRepl()

const time = (time) => {
    setTimeout(async () => {
        await client.stop()
    }, time)
}

router.get('/takeoff', async (req,res,next) => {
    await client.ftrim()
    await client.calibrate()
    await client.takeoff()
    res.json('taking off')
})

router.get('/land', async (req,res,next) => {
    time(2000)
    await client.land()
    res.json('landing')
})

router.get('/battery', (req,res,next) => {
    const batt = client.battery()
    console.log('battery', batt)
    res.json(client.battery())
})

router.get('/navData',  (req,res,next) => {
    const data = client.on('navdata', console.log)
    console.log('data', data.demo)
})
router.get('/up', async (req,res) => {
    await client.up(0.1)
    time(1000)
    res.send('down')
})
router.get('/down', async (req,res) => {
    await client.down(0.1)
    time(1000)
    res.send('down')
})
router.get('/calibrate', (req,res) => {
    client.calibrate(0)
    res.send('calibrating')
})
router.get('/pitchForward', async (req,res) => {
    await client.front(0.2)
    time(1000)
    res.send('pitching forward')
})
router.get('/pitchBack', async (req,res) => {
    await client.back(0.2)
    time(1000)
    res.send('pitching back')
})
router.get('/stop', (req,res) => {
    client.stop()
    res.send('stopping')
})
router.get('/leftYaw', async (req,res) => {
    await client.counterClockwise(0.2)
    time(1000)
    res.send('yawing left')
})
router.get('/rightYaw', async (req,res) => {
    await client.clockwise(0.2)
    time(1000)
    res.send('right yaw')
})
router.get('/leftRoll', async (req,res) => {
    await client.left(0.2)
    time(1000)
    res.send('rolling left')
})
router.get('/rightRoll', async (req,res) => {
    await client.right(0.2)
    time(1000)
    res.send('rolling right')
})
router.get('/disableEmergency', (req,res) => {
    client.disableEmergency()
    res.send('emergency over')
})



module.exports = router