const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User");
const Post = require("./models/Post");

mongoose.connect(process.env.MONGO_URI).then(async () => {
    console.log("MongoDB connected in seed.js");

    const user = await User.create({ username: "tester1", passwordHash: "hashed123" });
    const post = await Post.create({
        title: "My first post",
        content: "Hello from MongoDB!",
        author: user._id
    });

    const populatedPost = await Post.findById(post._id).populate("author");
    console.log("Post with populated author:", populatedPost);

    mongoose.disconnect();
});