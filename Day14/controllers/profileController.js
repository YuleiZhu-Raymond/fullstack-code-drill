const getProfile = (req, res) => {
    res.status(200).json({
        id: req.user.id,
        message: "User profile fetched successfully"
    });
};

module.exports = { getProfile };
