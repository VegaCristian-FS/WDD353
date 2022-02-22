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

router.get('/contacts', (req, res) =>{
    res.render('contacts', {
        pageName: 'contacts'
    })
})

//Validate form
router.post('/contacts', (req, res) => {
    const errors = []
    console.log(req.body)

    if (req.body.fname.length === 0) {
        errors.push('First name cannot be blank')
    }
    if (req.body.lname.length === 0) {
        errors.push('Last name cannot be blank')
    }
    if (req.body.address.length === 0) {
        errors.push('Address cannot be blank')
    }
    if (req.body.city.length === 0) {
        errors.push('City cannot be blank')
    }
    if (req.body.state.length === 0) {
        errors.push('State cannot be blank')
    }
    if (req.body.zip.length === 0) {
        errors.push('zip cannot be blank')
    }
    if (req.body.bio.length === 0) {
        errors.push('Bio cannot be blank')
    }
    if (parseInt(req.body.age) < 18) {
        errors.push('Must be over 18 years old')
    }
    if (!req.body.gender) {
        errors.push('Please choose gender')
    }
    if (!req.body['consent']) {
        errors.push('Must consent before submitting')
    }
    res.render('contacts', {
        pageName: 'contacts', errors
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