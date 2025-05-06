const express = require('express');
const cors = require('cors');

const app = express();
const PORT=3001;

app.use(cors());
app.use(express.json());

let todos = [];

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ error: 'Task is required' });
    }
    todos.push({ task });
    res.status(201).json({ task });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// This code sets up a simple Express server with CORS enabled and JSON parsing middleware.