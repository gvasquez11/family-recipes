const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRouters = require('./routes/home')
const familyRouters = require('./routes/family')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/',homeRouters)
app.use('/familyRec', familyRouters)

app.listen(process.env.PORT, ()=> {
    console.log('Server is currently running!')
})