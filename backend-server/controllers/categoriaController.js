const mysql = require('../config/db');

exports.obtenerPeliculasPorGenero = (req, res) => {
    const generoNombre = req.params.genero;

    const query = `
        SELECT sp.* 
        FROM serie_pelicula sp
        JOIN sp_genero sg ON sp.id_sp = sg.fk_sp
        JOIN genero g ON sg.fk_genero = g.id_genero
        WHERE g.nombre = ?
    `;

    mysql.query(query, [generoNombre], (error, results) => {
        if (error) return res.status(500).json({ error });

        res.json(results);
    });
};