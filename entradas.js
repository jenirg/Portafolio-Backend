const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    console.log("entrado en entradas")
});

router.post('/crear', async (req, res) => {

});

router.put('/actualizar/:id', async (req, res) => {

});

router.delete('/eliminar/:id', async (req, res) => {

});


module.exports = router;
