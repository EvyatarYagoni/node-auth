const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {
    const header = req.headers['authorization'];

    if (!header) {
        res.status(401).send("Unauthorized");
    } else {
        const bearer = header.split(' ');
        const token = bearer[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).send("Unauthorized");
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
}

module.exports = {
    authMiddleware
}