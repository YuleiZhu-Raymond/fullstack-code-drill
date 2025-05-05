const jwt = require('jsonwebtoken');

function authenticateJWT(secretKey) {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith('Bearer ')) {
            const token = authHeader.split(' ')[1];

            jwt.verify(token, secretKey, (err, user) => {
                if (err) {
                    return res.sendStatus(403); // Forbidden
                }
                req.user = user;
                next();
            });
        }
        else {
            res.sendStatus(401); // Unauthorized
        }
    };
}

module.exports = authenticateJWT;