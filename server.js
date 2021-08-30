require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express()
var cors = require('cors')

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors({ origin: true, credentials: true }))

app.use(require('./routes'))
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server running on port ${port}`))
