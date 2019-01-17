const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const cheerio = require('cheerio')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.json({ msg: 'diller' }))

app.get('/test', (req, res) => {
  const options = {
    url: 'https://www.lectio.dk/lectio/165/SkemaNy.aspx?type=elev&elevid=26559177918&week=032019'
  }
  request(options, (error, response, body) => {
    const html = body.match(/(<body[^]*<\/body>)/)[0]
    const $ = cheerio.load(html)
    res.send($('*').html())
  })
})

const port = process.env.PORT || 3001
app.listen((port), () => console.log(`Server is listening on port ${port}`))
