const adminAuth = (req,res,next)=>{
    const token = "xyz6";
    const Authenticate = token === "xyz";
    if (!Authenticate) {
        res.status(401).send("User is not Authenticate");
    } else {
     next();
    }
}

const userAuth = (req,res,next) =>{
    const token = "xyz777";
    const Authenticate = token === "xyz";
    if (!Authenticate) {
        res.status(401).send("User is not Authenticate");
    } else {
     next();
    }
}

module.exports={adminAuth,userAuth}