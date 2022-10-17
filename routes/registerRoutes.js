const express = require('express');
const router = express.Router();
//importing model-14
const Registration = require('../models/User')//-14 
//creating router
router.get('/register', (req, res)=>{
    res.render('farmerOnregistration')
}); 

router.post('/register', async (req, res)=>{
    console.log(req.body);
    try {//-14 try catch
       const user = new Registration(req.body);// req.body is the information that we are getting from the form tat we are posting
       await Registration.register(user, req.body.password, (error) => {
            if(error){
                throw error
            }
            res.redirect('/register')
       }); //while we are posting our forms, this compare the username and the password
    } catch (error) {
        res.status(400).send('Sorry we are updating system');
        console.log(error)
    }
}); 

module.exports = router;