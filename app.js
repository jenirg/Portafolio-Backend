require('dotenv').config();

const express = require('express');
const db = require('./db');
const rutasBlogs = require('./blogs');

const app = express();
app.use(express.json());
app.use('/api/blogs', rutasBlogs);

db.connect();
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));