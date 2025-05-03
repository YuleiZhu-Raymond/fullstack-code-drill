const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
    console.log("Request received at  " + new Date().toISOString());
    next();
});

app.get('/', (req, res) => {
    res.send('Hello Middleware!');
});

app.get('/error', (req, res) => {
    throw new Error('This is a simulated error!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${[port]}`);
});