'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const errorHandler = require('errorhandler')
const http = require('http')
const path = require('path')

const app = express()

/**
 * Configuration
 */
// all environments
app.set('port', process.env.PORT || 3000)
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(express.static(path.join(__dirname, '/')))

const env = process.env.NODE_ENV || 'development'

// development only
if (env === 'development') {
    app.use(errorHandler())
}

/**
* Routes
**/
app.get('/', (req, res) => {
    res.render('index')
})

/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), (req, resp) => {
    console.log('Express server listening on port ' + app.get('port'))
})
