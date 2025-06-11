const db = require('../config/db');

exports.getSeriesPeliculas = (req, res) => {
    db.query('SELECT * FROM serie_pelicula', (error, results) => {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            message: 'Series y películas.'
        });
    });
};

exports.getReviews = (req, res) => {
    db.query('SELECT * FROM review', (error, results) => {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            message: 'Reseñas.'
        });
    });
};

exports.getPopulares = (req, res) => {
    const sql = `
        SELECT sp.id_sp, sp.url_foto,
               r.id_review, r.comentario, r.rating, r.cantidad_likes
        FROM serie_pelicula sp
                 JOIN review_sp rsp ON sp.id_sp = rsp.fk_sp
                 JOIN review r ON r.id_review = rsp.fk_review
                 JOIN (
            SELECT rsp.fk_sp, MAX(r.cantidad_likes) as max_likes
            FROM review_sp rsp
                     JOIN review r ON rsp.fk_review = r.id_review
            GROUP BY rsp.fk_sp
        ) as top_review ON rsp.fk_sp = top_review.fk_sp AND r.cantidad_likes = top_review.max_likes
    `;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).json({ error: 'Error al obtener datos' });
            return;
        }

        const mapa = new Map();

        results.forEach(row => {
            const spId = row.id_sp;
            if (!mapa.has(spId)) {
                mapa.set(spId, {
                    seriePelicula: {
                        id: spId,
                        url_foto: row.url_foto,
                    },
                    reviews: [],
                });
            }

            mapa.get(spId).reviews.push({
                id: row.id_review,
                comentario: row.comentario,
                rating: row.rating,
                cantidad_likes: row.cantidad_likes,
            });
        });

        const populares = Array.from(mapa.values());
        res.json(populares);
    });
};

exports.getRecientes = (req, res) => {
    const sql = `
        SELECT id_sp, nombre, url_foto, fecha
        FROM serie_pelicula
        ORDER BY fecha DESC
        LIMIT 3
    `;

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error al obtener recientes:', err);
            return res.status(500).json({ error: 'Error en la consulta' });
        }
        res.json(results);
    });
};

