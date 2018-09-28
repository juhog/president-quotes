require('dotenv').config()
require('./quote_api/model/db');

var routesApi = require('./quote_api/routes/index');

const express = require('express')
const helmet = require('helmet')
const mainRouter = require('./src/routes/mainRouter')


const app = express()


app.set('views', './src/views/pages')
app.set('view engine', 'ejs')

// Serve public files.
app.use(express.static('public'))

// Helmet protects from something.
app.use(helmet())

// Form data stuff.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Router of the main page.
app.use('/', mainRouter)

// Router of the api
app.use('/api', routesApi);

// Handle 404.
app.use((req, res) => res.sendStatus(404))

// Handle errors.
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(8080)

// console.dir(json, {colors: true, depth: null})

// curl -d '{"query": "Juho", "title": "Trumpf", "quote": "greatest Trump quote!", "image_url": "www.my_image.org"}' -H "Content-Type: application/json" -X POST http://locahost:8080/api/quotes