const path = require('path')
const express = require('express')

const app = express()

const mongoose = require('mongoose')

//Routes
const regRoutes = require('./routes/regRoutes')

//Get Configurations
const Configurations = require('./config/config')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

/** DATABASE CONNECTIONS */
mongoose.set('strictQuery', false);
mongoose.connect(`${Configurations.DB}`, {useNewUrlParser: true})
    .then(() => console.log('Connected to Database'))
    .catch(err => console.log(err))

app.use('/',regRoutes)

const port = process.env.port || 3002

app.listen(`${port}`, () => {
    console.log(`App is running on port ${port}`)
})