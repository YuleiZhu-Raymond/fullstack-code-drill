const express = require("express");
const router = express.Router();
const { createPost, getAllPosts, getPostById, deletePost, updatePost } = require("../controllers/postController");
const { authenticateToken } = require("../middleware/authMiddleware");

router.post("/", authenticateToken, createPost);
router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.delete("/:id", authenticateToken, deletePost);
router.put("/:id", authenticateToken, updatePost);
module.exports = router;