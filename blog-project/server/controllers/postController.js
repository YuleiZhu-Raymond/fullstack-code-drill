const Post = require("../models/Post");

exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    try {
        const post = await Post.create({ 
            title,
            content,
            author: req.user.id,
            createdAt: Date.now()
        });
        res.status(201).json({ message: "Post created", post });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 }).populate("author", "username");
        res.json(posts);
    } catch(err) {
        res.status(500).json({ message: "Server error",  error: err.message });
    }
};

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate("author", "username");
        if (!post) return trusted.status(404).json({ message: "Post not found" });
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};