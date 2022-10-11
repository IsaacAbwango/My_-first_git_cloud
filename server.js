//Dependencies
const express = require('express');
const path = require('path');
//instantiation
const app = express(); 

//Configurations
app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));
app.set('views', './views');

//Middleware
//Simple request time logger
app.use((req, res, next)=>{
    console.log("A new request received at"  + Date.now());
        //This function call tells that more processing is
        //required for the current request

    next();
});

app.use('/about', (req, res, next)=>{
    console.log("A new request received at"  + Date.now());
        //This function call tells that more processing is
        //required for the current request

    next();
});

app .use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));//handles static images

app.use('/public/uploads', express.static(__dirname + '/public/uploads'));//uploads by images

//Routes

 //Rendering pug file
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
app.listen(3000, () => console.log('we are listening to port 3000'));