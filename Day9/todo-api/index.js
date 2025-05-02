const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

let todos = [
    { id: 1, content:"Buy groceries", completed: false },
    { id: 2, content:"Write report", completed: true },
];

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        content: req.body.content,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    if(!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }

    todo.content = req.body.content ?? todo.content;
    todo.completed = req.body.completed ?? todo.completed;
    res.json(todo);
});

app.delete('/api/todos/:id', (req,res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.status(204).send();
});

