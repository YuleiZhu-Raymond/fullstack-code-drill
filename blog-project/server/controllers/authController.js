const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// NOTE: JWT_SECRET is loaded from environment variables. If not loaded correctly, token generation will fail.
const JWT_SECRET = process.env.JWT_SECRET || "devsecret";

exports.registerUser = async (req, res) => {
    const { username, password } = req.body;

    // Check if user already exists. If so, return 400. This can cause test failures if not cleaned up before tests.
    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, passwordHash });

    // Always generate and return a token after registration. Missing this will cause tests expecting token to fail.
    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ 
        message: "User created", 
        user: { id: user._id, username: user.username },
        token // Token is included in the response for client and test validation
    });
};

exports.loginUser = async (req,res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if(!user)return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.passwordHash);
    if(!match) return res.status(401).json({ message: "Wrong password" });

    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ 
      token, 
      user: { 
        id: user._id, 
        username: user.username 
      } 
    });
};