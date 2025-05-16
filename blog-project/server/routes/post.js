const express = require("express");
const router = express.Router();
const { createPost, getAllPosts, getPostById } = require("../controllers/postController");
const { authenticateToken } = require("../middleware/authMiddleware");
const { deletePost } = require("../controllers/postController");

router.post("/", authenticateToken, createPost);
router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.delete("/:id", authenticateToken, deletePost);

module.exports = router;