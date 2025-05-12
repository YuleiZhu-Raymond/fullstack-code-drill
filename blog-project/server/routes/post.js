const express = require("express");
const router = express.Router();
const { createPost, getAllPosts, getPostById } = require("../controllers/postController");
const { authenticateToken } = require("../middleware/authMiddleware");

router.post("/", authenticateToken, createPost);
router.get("/", getAllPosts);
router.get("/:id", getPostById);

module.exports = router;