//Middleware for handeing auth 
const {User} = require('../db/index');

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password =req.headers.password ;

    //check if user exist in database with given username and password
    User.findOne({
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