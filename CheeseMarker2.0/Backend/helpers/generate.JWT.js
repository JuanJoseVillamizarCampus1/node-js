const jwt = require('jsonwebtoken');

const generatejwt = (uid='')=>{
    return new Promise ((resolve, reject)=>{
        const payload = {uid}

        jwt.sign(payload,process.env.SECRET_OR_PRIVATE_KEY)
    })
}

module.exports={
    generatejwt
}