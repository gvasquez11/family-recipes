const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const homeRouters = require('./routes/home')
const familyRouters = require('./routes/family')

require('dotenv').config({path: './config/.env'})

require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())


app.use('/',homeRouters)
app.use('/familyRec', familyRouters)

app.listen(process.env.PORT, ()=> {
    console.log('Server is currently running!')
})