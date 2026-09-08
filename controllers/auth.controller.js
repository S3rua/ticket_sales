const md5 = require(`md5`)
const jwt = require(`jsonwebtoken`)
const userModel = require(`../models/index`).user
const secret = `mokleters`


/** create function to handle authenticating process */
const authenticate = async (request, response) => {
    let dataLogin = {
        email: request.body.email,
        password: md5(request.body.password)
    }
    
    /** check data username and password on user's table */
    let dataUser = await userModel.findOne({ where: dataLogin })
    
    /** if data user exists */
    if(dataUser){
        /** set payload for generate token.
        * payload is must be string.
        * dataUser is object, so we must convert to string.
        */
        let payload = {
    userID: dataUser.userID,
    role: dataUser.role
}

let token = jwt.sign(payload, secret)

        /** define response */
        return response.json({
            success: true,
            logged: true,
            message: `Authentication Success`,
            token: token,
            data: dataUser
        })
    }
    /** if data user is not exists */
    return response.json({
        success: false,
        logged: false,
        message: `Authentication Failed. Invalid username or password`
    })
    
}

/** create function authroize */
const authorize = (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        try {
            let verifiedUser = jwt.verify(token, secret);

            request.user = verifiedUser;
            next();

        } catch (error) {
            return response.status(401).json({
                success: false,
                auth: false,
                message: `User Unauthorized`
            });
        }

    } else {
        return response.status(401).json({
            success: false,
            auth: false,
            message: `User Unauthorized`
        });
    }
}

/** export function to another file */
module.exports = { authenticate, authorize }


    