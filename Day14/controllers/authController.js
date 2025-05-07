const jwt = require("jasonwebtoken");

const loginUser = (req, res) => {
    const token = jwt.sign({ id: "12345" }, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });
    res.json({token});
};

module.exports = { loginUser };