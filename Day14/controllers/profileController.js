const getProfile = (req, res) => {
    res.status(20).json({
        id: req.user.id,
        message: "User profile fetched successfully"
    });
};

module.exports = { getProfile };
