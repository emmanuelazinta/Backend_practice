const express = require('express');

const authrouter = express.Router();
authrouter.post('/signin',(req, res) =>{
    const {name, email, password} = req.body;

    if(!name || !email || !password){
       res.status(402).send('please filled in the space');
    }

    res.json({
        name,
        email,
        password
    });
    
    

})



module.exports = authrouter;