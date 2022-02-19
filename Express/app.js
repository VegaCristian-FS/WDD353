"use strict"
let express = require("express")
let bodyParser = require ("body-parser")
let router = express.Router()
let app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true 
}))

app.set("view engine", "ejs")
app.engine("ejs",require("ejs").__express)

//Routes
router.get('/', (req, res) =>{
    res.render('index', {
        pageName: 'index'
    })
})

router.get('/about', (req, res) =>{
    res.render('about', {
        pageName: 'about'
    })
})

router.get('/portfolio', (req, res) =>{
    res.render('portfolio', {
        pageName: 'portfolio'
    })
})

//Declare static file locations
app.use(express.static('views'))
app.use(express.static('public'))
app.use('/', router)

//start server
let server = app.listen('8080', () =>{
    console.log('Server tunning on port 8080')
})