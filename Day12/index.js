const express = require('express');
const jwt = require('jsonwebtoken');
const { users } = require('./users.js');
const authenticateJWT = require('./authMiddleware.js');

const app = express();
app.use(express.json());

const SECRET_KEY = 'mysecret123';

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.get('/api/protected', authenticateJWT(SECRET_KEY), (req, res) => {
    res.json({ message: `Hello ${req.user.username}, you accessed a protected route.` });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

