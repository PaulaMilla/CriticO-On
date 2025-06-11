const db = require('../config/db');

const Review = {
  create: (data, callback) => {
    const { comentario, rating, fecha, spoiler, userId, contentId } = data;

    // Paso 1: insertar en review
    const insertReviewQuery = `
      INSERT INTO review (comentario, rating, fecha, spoiler)
      VALUES (?, ?, ?, ?)
    `;

    db.query(insertReviewQuery, [comentario, rating, fecha, spoiler], (err, result) => {
      if (err) return callback(err);

      const reviewId = result.insertId;

      // Paso 2: insertar en usuario_review
      const insertUsuarioReviewQuery = `
        INSERT INTO usuario_review (fk_usuario, fk_review, fecha)
        VALUES (?, ?, ?)
      `;

      db.query(insertUsuarioReviewQuery, [userId, reviewId, fecha], (err) => {
        if (err) return callback(err);

        // Paso 3: insertar en review_sp
        const insertReviewSPQuery = `
          INSERT INTO review_sp (fk_review, fk_sp)
          VALUES (?, ?)
        `;

        db.query(insertReviewSPQuery, [reviewId, contentId], (err) => {
          if (err) return callback(err);

          // Listo
          callback(null, { id_review: reviewId });
        });
      });
    });
  }
};

module.exports = Review;
