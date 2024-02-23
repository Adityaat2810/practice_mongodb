const express = require('express');
const adminMiddleware = require('../middleware/admin');
const router = express.Router();
const {Admin} =require('../db/index');

router.post('/signup',async (req,res)=>{

    try{
        const username =req.body.username;
        const password =req.body.password;

        //check if user with username is already exists
        await Admin.create({
            username,
            password
        })

        res.json({
            message:'admin created successfully'
        })
    }catch(error){
        console.log('someting went wrong in admin signup route');
        throw{error};
    }

    

})

module.exports =router