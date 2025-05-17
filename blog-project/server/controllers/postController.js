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
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post)return res.status(404).json({ message: "Post not found" });

        console.log("post.author:", post.author, typeof post.author);
        console.log("req.user.id:", req.user.id, typeof req.user.id);
        console.log("String(post.author):", String(post.author));
        console.log("String(req.user.id):", String(req.user.id));

        if (String(post.author) !== String(req.user.id)) {
            return res.status(403).json({ message: "Not allowed to delete this post" });
        }

        await Post.deleteOne({ _id: post._id });
        res.json({ message: "Post deleted" });
    }   catch (err) {
        res.status(500).json({ message: "Server error", error:err.message });
    }
};

exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) return res.status(404).json({ message: "Post not found" });

        if(post.author.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not allowed to edit thsi post" });
        }

        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;

        await post.save();

        res.json({ message: "Post updated", post });
    }   catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};