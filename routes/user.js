const {Router} = require("express");
const router = Router();
const{User, Course} =require('../db/index')
const userMiddleware =require('../middleware/user');
const { abort } = require("process");

router.post('/signup',async( req,res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;

        await User.create({
            username:username,
            password:password
        });

        res.json({
            message:'user created successfully'
        })

    }catch(error){
        console.log('something went wrong in user routes');
        throw{error}
    }
});

router.get('/courses',async (req,res)=>{
    //Implement listing all course logic 
    //Implement fetching all coursese logic
    try{
        const response =await Course.find({})

        res.json({
            courses:response
        })
    }catch(error){
        console.log("something went wrong in user routes");
        throw {error}
    }
    
})

router.post('/courses/:courseId',userMiddleware,async (req,res)=>{
    // Implement course purchase logic 
    const courseId = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne({username:username}, {
        $push: { 
            purchasedCourses: courseId
         }
    } 
    )

    res.json({
        message:'purchased complete'
    })

    
})

router.get('/purchasedCourses',userMiddleware,async (req,res)=>{
    // implement fetching purchased courses logic 
    const user=await User.findOne({
        username:req.headers.username
    });

    console.log(user.purchasedCourses);

    const  courses=await Course.find({
        _id:{
            "$in":user.purchasedCourses
        }
    })

    res.json({
        courses:courses
    })
})

module.exports = router