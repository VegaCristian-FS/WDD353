"use strict"
let express = require("express")
let bodyParser = require ("body-parser")
let router = express.Router()
let app = express();
let session = require('express-session');
const { response } = require("express");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true 
}))

app.set("view engine", "ejs")
app.engine("ejs",require("ejs").__express)

app.use(session({
    secret: "secretKey",
    saveUninitialized:true,
    resave: false
}));
let sess;

//Routes
router.get('/', (req, res) =>{
    sess = req.session;
    res.render('index', {
        pageName: 'index',
        sess: sess
    })
})

router.get('/about', (req, res) =>{
    sess = req.session;
    res.render('about', {
        pageName: 'about',
        sess: sess
    })
})

router.get('/portfolio', (req, res) =>{
    sess = req.session;
    res.render('portfolio', {
        pageName: 'portfolio',
        sess: sess
    })
})

router.get('/contacts', (req, res) =>{
    sess = req.session;
    res.render('contacts', {
        pageName: 'contacts',
        sess: sess
    })
})

//Setting up profile routing
router.get('/profile', (req, res) =>{
    sess = req.session;
    if(typeof(sess)=="undefined" || sess.loggedin != true){
        let errors = ["Not authenticated user"]
        res.render('index', {
        pageName: 'index',
        errs: errors
    })
    } else {
        res.render("profile", {
            pageName: 'profile',
            sess: sess,
        })
    }
})
//Logging out 
app.get('/logout', (req, res) => {
    sess = req.session;
    sess.destroy((err) => {
        res.redirect("/")
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


app.post('/login',(req,res) => {
    let errors = [];
    let email = req.body.email
    let password= req.body.password
    console.log(1 +email+ " " +password)

    if (email === "Mike@aol.com" && password === "abc123"){
        sess = req.session;
        sess.loggedIn = true
        res.render("profile", {
            pageName:"profile", 
            sess:sess
        })
    } else {        
        errors.push('Invalid Credentials');
        res.render('index', {
            pageName: 'index',
            errs: errors
        })
    }
})

//Declare static file locations
app.use(express.static('views'))
app.use(express.static('public'))
app.use('/', router)

//start server
let server = app.listen('8080', () =>{
    console.log('Server tunning on port 8080')
})