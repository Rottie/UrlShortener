//Build node js server
const express = require('express')
const app = express()

//Template engine set up
const exphbs = require('express-handlebars');

//Database connections either herokuapp or localhost
const PORT = process.env.PORT || 3000
//Gain mongoose setting
require('./config/mongoose')

// require routes modules
const routes = require('./routes')

//hbs tools set up
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//Include statics files like images and css
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(routes)

// 設定 port 3000
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}`)
})