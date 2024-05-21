require('dotenv').config();

const express = require('express');
const db = require('./db');
const rutasBlogs = require('./blogs');
const rutasEntradas = require('./entradas');

const app = express();
app.use('/api/blogs', rutasBlogs);
app.use('/api/entradas', rutasEntradas);

db.connect();
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));