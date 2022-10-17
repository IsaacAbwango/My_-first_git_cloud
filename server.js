//Dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose')//Database start
const config = require('./config/db');
const passport = require('passport');
//express session
const expressSession = require('express-session')({//database when some is not successfully logged in
    secret: 'secret',
    resave:false,
    saveUninitialized: false,
});

//import the user model-14
const Registration = require('./models/User');

//Importing route files
const registrationRoutes = require('./routes/registerRoutes')

//instantiation
const app = express(); 

//Setup Database Connections
mongoose.connect(config.database,{ useNewUrlParser: true });//Database
const db = mongoose.connection;

// Check connection
db.once('open', function(){

  console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function(err){
  console.error(err);
});

//Configurations
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));
//app.set('views', './views');
//Middleware
app .use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));//handles static images

app.use('/public/uploads', express.static(__dirname + '/public/uploads'));//uploads by images

app.use(expressSession); //Database connection

//passport configuration middleware(database connection)
app.use(passport.initialize())//passport is for authentication
app.use(passport.session());
passport.use(Registration.createStrategy());//14
passport.serializeUser(Registration.serializeUser());// the user are assign a serial number when the login 
passport.deserializeUser(Registration.deserializeUser()); // once they logout the serial no. is destroyed

//Routes
app.use('/',registrationRoutes)
app.get("/login",(req, res) =>{
    
    res.render("login"); 
});

app.post("/login",(req, res) =>{
   console.log(req.body);
    res.redirect("/register"); 
});

app.get("/register",(req, res) =>{
    
    res.render("register"); 
});

app.post("/register",(req, res) =>{
   console.log(req.body);
    res.redirect("/register"); 
});

app.get("/farmerOnregistration",(req, res) =>{
    
    res.render("farmerOnregistration"); 
});

app.post("/farmerOnregistration",(req, res) =>{
   console.log(req.body);
    res.redirect("/farmerOnregistration"); 
});

app.get("/viewFO",(req, res) =>{
    
    res.render("viewFO"); 
});

app.post("/viewFO",(req, res) =>{
   console.log(req.body);
    res.redirect("/viewFO"); 
});

app.get("/homepage",(req, res) =>{
    
    res.render("homepage"); 
});

app.post("/homepage",(req, res) =>{
   console.log(req.body);
    res.redirect("/homepage"); 
});

//Foe invalid, always the second last
app.get("*",(req, res) =>{
   
    res.send("404! This is an invalid URL.");
});


//Bootstrapping Server
app.listen(4000, () => console.log('we are listening to port 4000'));