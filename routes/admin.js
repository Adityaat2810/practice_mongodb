const express = require('express');
const adminMiddleware = require('../middleware/admin');
const router = express.Router();
const {Admin} =require('../db/index');
const {Course} =require('../db/index');


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
    }const express = require('express');
    const adminMiddleware = require('../middleware/admin');
    const router = express.Router();
    const {Admin} =require('../db/index');
    const {Course} =require('../db/index');
    
    
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
    
    router.post('/courses', adminMiddleware ,async (req,res)=>{
        // implement course creation logic 
        try{
            const title = req.body.title;
            const description =req.body.description
            const imageLink = req.body.imageLink
            const price = req.body.price
            //zod
            const newCourse=await Course.create({
                title,
                description,
                imageLink,
                price
            })
        
            res.json({
                message:"course created successfully",
                courseId:newCourse._id
            })
    
        }catch(error){
            console.log('something went wrong in admin routes');
            throw{error}
        }
       
    })
    
    module.exports =router

    

})

router.post('/courses', adminMiddleware ,async (req,res)=>{
    // implement course creation logic 
    try{
        const title = req.body.title;
        const description =req.body.description
        const imageLink = req.body.imageLink
        const price = req.body.price
        //zod
        const newCourse=await Course.create({
            title,
            description,
            imageLink,
            price
        })
    
        res.json({
            message:"course created successfully",
            courseId:newCourse._id
        })

    }catch(error){
        console.log('something went wrong in admin routes');
        throw{error}
    }
   
})

module.exports =router