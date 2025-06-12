const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

router.get('/serie_pelicula', contentController.getSeriesPeliculas);
router.get('/review', contentController.getReviews);
router.get('/populares', contentController.getPopulares);
router.get('/recientes', contentController.getRecientes);
router.get('/:id', contentController.getContenidoById);


module.exports = router;
