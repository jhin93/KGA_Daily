const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('lvtest q4')
})

app.listen(port, () => {
  console.log(`leveltest Question number 3 answer code. Check it out localhost:${port}`)
})