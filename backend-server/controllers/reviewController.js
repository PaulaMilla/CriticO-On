const Review = require('../models/Review');

exports.createReview = (req, res) => {
  const { comentario, rating, fecha, spoiler, userId, contentId } = req.body;

  if (rating < 0 || rating > 10) {
    return res.status(400).json({ message: 'El rating debe estar entre 0 y 10' });
  }

  const data = {
    comentario,
    rating,
    fecha,
    spoiler: !!spoiler,
    userId,
    contentId
  };

  Review.create(data, (err, result) => {
    if (err) {
      console.error('Error al crear la reseña:', err);
      return res.status(500).json({ message: 'Error al crear la reseña' });
    }

    res.status(201).json({ message: 'Reseña creada exitosamente', id: result.id_review });
  });
};
