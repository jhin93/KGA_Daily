const express = require('express')
const app = express()
const port = 3000

app.get('/getCookie', (req, res) => {
  res.send('lvtest q3')
})

app.listen(port, () => {
  console.log(`leveltest Question number 3 answer code. Check it out localhost:${port}/getCookie`)
})