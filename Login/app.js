"use strict"
let express = require("express")
let bodyParser = require ("body-parser")
let router = express.Router()
let app = express();
let session = require('express-session');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true 
}))

app.set("view engine", "ejs")
app.engine("ejs",require("ejs").__express)

app.use(session({
    secret: "secretKey",
    saveUninitialized:true,
    resave: true
}));
let sess;

//Routes
router.get('/', (req, res) =>{
    sess = req.session;
    let errs = []
    res.render('index', {
        pageName: 'index',
        sess: sess,
        errs: errs
    })
})

router.get('/about', (req, res) =>{
    sess = req.session;
    let errs = []
    res.render('about', {
        pageName: 'about',
        sess: sess,
        errs: errs
    })
})

router.get('/portfolio', (req, res) =>{
    sess = req.session;
    let errs = []
    res.render('portfolio', {
        pageName: 'portfolio',
        sess: sess,
        errs: errs
    })
})

router.get('/contacts', (req, res) =>{
    sess = req.session;
    let errs = []
    res.render('contacts', {
        pageName: 'contacts',
        sess: sess,
        errs: errs
    })
})

//Setting up profile routing
router.get('/profile', (req, res) =>{
    sess = req.session;
    let errs = []
    if(typeof(sess)=="undefined" || sess.loggedIn != true){
        errs.push("Not authenticated user");
        res.render('index', {
            pageName: 'index',
            errs: errs
        })
    } else {
        res.render("profile", {
            pageName: 'profile',
            sess: sess,
            errs: errs
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
    const errs = []
    console.log(req.body)

    if (req.body.fname.length === 0) {
        errs.push('First name cannot be blank')
    }
    if (req.body.lname.length === 0) {
        errs.push('Last name cannot be blank')
    }
    if (req.body.address.length === 0) {
        errs.push('Address cannot be blank')
    }
    if (req.body.city.length === 0) {
        errs.push('City cannot be blank')
    }
    if (req.body.state.length === 0) {
        errs.push('State cannot be blank')
    }
    if (req.body.zip.length === 0) {
        errs.push('zip cannot be blank')
    }
    if (req.body.bio.length === 0) {
        errs.push('Bio cannot be blank')
    }
    if (parseInt(req.body.age) < 18) {
        errs.push('Must be over 18 years old')
    }
    if (!req.body.gender) {
        errs.push('Please choose gender')
    }
    if (!req.body['consent']) {
        errs.push('Must consent before submitting')
    }
    res.render('contacts', {
        pageName: 'contacts', errs
    })
})


app.post('/login',(req,res) => {
    let errs = [];
    let email = req.body.email
    let password= req.body.password

    if (email === "Mike@aol.com" && password === "abc123"){
        sess = req.session;
        sess.loggedIn = true
        console.log(sess)
        res.render("profile", {
            pageName:"profile", 
            sess,
            errs
        })
    } else {    
        sess = req.session; 
        sess.loggedIn = false   
        console.log(sess)
        errs.push('Invalid Credentials');
        res.render('index', {
            pageName: 'index',
            errs,
            sess
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