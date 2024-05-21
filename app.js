require('dotenv').config();

const express = require('express');
const db = require('./db');

const app = express();

db.connect();
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));