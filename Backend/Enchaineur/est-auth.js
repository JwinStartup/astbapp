const jwt =require('jsonwebtoken');


const estAuth=(req)=>{
    try {
        let isAuth,userId
        
    const authHeader = req.get('Authorization');
    if(!authHeader){
        isAuth= false;
        return next();
    }
    const token= authHeader.split(' ')[1];
    if(!token || token===''){
        isAuth= false;
        return next();
    }
    let decodeToken;
    try{
    decodeToken= jwt.verify(token,'astraining')
    }catch(err){
        isAuth= false;
        return next();
    }
    if(!decodeToken){
        isAuth= false;
        return next(); 
    }
    isAuth=true;
    userId=decodeToken.userID; 

    console.log(isAuth,userId)
    return user={
        isAuth,
        userId
    }
    next();
   
    } catch (error) {
        new Error(error)
    }
   
};

exports.estAuth=estAuth;
