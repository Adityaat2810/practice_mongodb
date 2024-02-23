//Middleware for handeing auth 
const {Admin} = require('../db/index');

function adminMiddleware(req,res,next){
    const username = req.headers.username;
    const password =req.headers.password ;

    //check if admin exist in database with given username and password
    Admin.findOne({
        username:username,
        password:password
    })
    .then(function (value){
        if(value){
            next();
        }else{
            res.status(403).json({
                'message':'user does not exists'
            })
        }
    });

}