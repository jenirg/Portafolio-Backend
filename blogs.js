const express = require('express');
const blogsEsquema = require('./esquemas/blogsEsquema');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log("Obteniendo blogs")
    const blogs = await blogsEsquema.find();
    res.send(blogs);
});

router.post('/crear', async (req, res) => {
    console.log("Creando blogs")
    let nuevoBlog = new blogsEsquema({
        titulo: req.body.titulo,
        contenido: req.body.contenido,
        autor: req.body.autor,
        fecha: req.body.fecha
    });
    try {
        let blogGuardado = await nuevoBlog.save();
        console.log('Blog guardado:', blogGuardado);
        res.send({ response: "Se ha guardado correctamente", blog: blogGuardado });
    } catch (error) {
        console.error(error);
        res.status(500).send({ response: "Error al guardar el blog" });
    }
});

router.put('/actualizar/:id', async (req, res) => {
    console.log(`Actualizando el blog ${req.params.id}`);
    let camposAActualizar = {};
    if (req.body.titulo) camposAActualizar.titulo = req.body.titulo;
    if (req.body.contenido) camposAActualizar.contenido = req.body.contenido;
    if (req.body.autor) camposAActualizar.autor = req.body.autor;
    if (req.body.fecha) camposAActualizar.fecha = req.body.fecha;
    try {
        let resultado = await blogsEsquema.updateOne({ _id: req.params.id }, camposAActualizar);
        console.log('Resultado de la actualización:', resultado);
        res.send({ response: "Se ha actualizado correctamente", resultado: resultado });
    } catch (error) {
        console.error(error);
        res.status(500).send({ response: "Error al actualizar el blog" });
    }
});

router.delete('/eliminar/:id', async (req, res) => {
    console.log(`Eliminando el blog ${req.params.id}`);
    try {
        let resultado = await blogsEsquema.deleteOne({ _id: req.params.id });
        console.log('Resultado de la eliminación:', resultado);
        res.send({ response: "Se ha eliminado correctamente", resultado: resultado });
    } catch (error) {
        console.error(error);
        res.status(500).send({ response: "Error al eliminar el blog" });
    }
});

module.exports = router;
