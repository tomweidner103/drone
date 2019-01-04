'use strict'


const app = require('./server/index')
const PORT = 3500

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})