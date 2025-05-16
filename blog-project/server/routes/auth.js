const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const { authenticateToken } = require("../middleware/authMiddleware");
const { deletePost } = require("../controllers/postController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.delete("/:id", authenticateToken, deletePost);

module.exports = router;