const express = require('express');
const app = express();
const expressQuantumMiddleware = require('./expressQuantumMiddleware');

// Add QuantumQuery middleware to route(s)
app.get('/example', expressQuantumMiddleware(), (req, res) => {
  res.send('QuantumQuery integration with Express!');
});

// Other route handlers...(adding soon)

app.listen(3000, () => {
  console.log('Express server is running on port 3000');
});