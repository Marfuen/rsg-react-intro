const express = require('express');
const app = express();
const path = require('path');
const data = require("../data");

app.get('/app.js', (req, res, next)=> res.sendFile(path.join(__dirname, '../dist', 'main.js')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, '../index.html')));

app.get('/api/data', (req,res,next) => {
  res.json(data);
});

module.exports = app;
