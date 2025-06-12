const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.get('/genero/:genero', categoriaController.obtenerPeliculasPorGenero);

module.exports = router;
