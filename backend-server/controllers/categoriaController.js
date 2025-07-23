const mysql = require('../config/db');

exports.obtenerPeliculasPorGenero = (req, res) => {
    const generoNombre = req.params.genero;

    const query = `
        SELECT 
            sp.*, 
            IFNULL(AVG(r.rating), 0) AS promedio_rating
        FROM serie_pelicula sp
        JOIN sp_genero sg ON sp.id_sp = sg.fk_sp
        JOIN genero g ON sg.fk_genero = g.id_genero
        LEFT JOIN review_sp rsp ON rsp.fk_sp = sp.id_sp
        LEFT JOIN review r ON r.id_review = rsp.fk_review
        WHERE g.nombre = ?
        GROUP BY sp.id_sp
        ORDER BY promedio_rating DESC;
    `;

    mysql.query(query, [generoNombre], (error, results) => {
        if (error) return res.status(500).json({ error });

        res.json(results);
    });
};