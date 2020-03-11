const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
require('dotenv').config()
require('./config/database')

app.use(logger('dev'))
app.use(express.json())

//Load favicon and static items
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use(cors())
app.use(cookieParser())

//Routes for API calls
app.use('/api/users', require('./routes/api/users'))

//Set all routes to the main index.html React file
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

//Set port and start listening
const port = process.env.PORT || 3001
app.listen(port, function(){
    console.log(`Express is running on port ${port}`)
})