require('dotenv').config();
const cors = require('cors');

const express = require('express');
const db = require('./db');
const rutasBlogs = require('./blogs');

const app = express();
app.use(express.json());
app.use('/api/blogs', rutasBlogs);
app.use(cors());

db.connect();
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));