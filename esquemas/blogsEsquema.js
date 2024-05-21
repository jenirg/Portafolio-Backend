const mongoose = require('mongoose');

const blogsEsquema = new mongoose.Schema({
    titulo: String,
    contenido: String,
    autor: String,
    fecha: String
});

const MiModelo = mongoose.model('Blogs', blogsEsquema);

module.exports = MiModelo;