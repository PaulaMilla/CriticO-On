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

exports.obtenerAniosDisponibles = (req, res) => {
    const query = `
    SELECT DISTINCT YEAR(fecha) AS anio
    FROM serie_pelicula
    WHERE fecha IS NOT NULL
    ORDER BY anio DESC
  `;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener años:', err);
            return res.status(500).json({ message: 'Error al obtener años disponibles.' });
        }

        const anios = results.map(row => row.anio);
        res.json(anios);
    });
};


exports.buscarContenido = (req, res) => {
    const { termino, anio } = req.query;
    const sql = `
    SELECT sp.id_sp, sp.nombre, sp.url_foto, sp.fecha, sp.descripcion,
           GROUP_CONCAT(DISTINCT g.nombre) AS generos,
           GROUP_CONCAT(DISTINCT a.nombre) AS actores
    FROM serie_pelicula sp
      LEFT JOIN sp_genero sg ON sp.id_sp = sg.fk_sp
      LEFT JOIN genero g ON sg.fk_genero = g.id_genero
      LEFT JOIN actor_sp asp ON sp.id_sp = asp.fk_sp
      LEFT JOIN actor a ON asp.fk_actor = a.id_actor
    WHERE (sp.nombre LIKE ?
        OR g.nombre LIKE ?
        OR a.nombre LIKE ?
              )
        ${anio ? 'AND YEAR(sp.fecha) = ?' : ''}
    GROUP BY sp.id_sp
  `;
    const search = `%${termino}%`;

    const params = [search, search, search];
    if (anio) params.push(parseInt(anio));

    db.query(sql, params, (err, results) => {
        if (err) {
            console.error('Error al buscar contenido:', err);
            return res.status(500).json({ message: 'Error al buscar contenido.' });
        }
        res.json(results);
    });
};


exports.getContenidoById = (req, res) => {
  const id = req.params.id;

  const query = `SELECT * FROM serie_pelicula WHERE id_sp = ?`;
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error al obtener contenido:', err);
      return res.status(500).json({ error: 'Error del servidor' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Contenido no encontrado' });
    }

    res.json(results[0]);
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
        ORDER BY rating DESC
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

exports.getReviewsByContenido = (req, res) => {
  const idSp = req.params.id;

  const sql = `
    SELECT r.id_review, r.comentario, r.rating, r.fecha, r.spoiler, r.cantidad_likes,
           u.nombre, u.alias, u.url_avatar
    FROM review r
    JOIN review_sp rsp ON r.id_review = rsp.fk_review
    JOIN usuario_review ur ON r.id_review = ur.fk_review
    JOIN usuario_registrado u ON ur.fk_usuario = u.id_usuario
    WHERE rsp.fk_sp = ?
    ORDER BY r.fecha DESC
  `;

  db.query(sql, [idSp], (err, results) => {
    if (err) {
      console.error('Error al obtener reviews:', err);
      return res.status(500).json({ error: 'Error al obtener reviews' });
    }

    res.json(results);
  });
};