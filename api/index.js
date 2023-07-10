const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const port = 8080

app.get('/', (req, res) => {
    res.send('hello world')
  })
  
app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`)
})